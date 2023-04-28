import { useEffect, useReducer, useRef } from "react";

interface State<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}
type Cache<T> = { [url: string]: T };
enum ActionType {
  loading = "loading",
  fetched = "fetched",
  error = "error",
}
type Action<T> =
  | { type: ActionType.loading }
  | { type: ActionType.fetched; payload: T }
  | { type: ActionType.error; payload: Error };

function useFetch<T = unknown>(url?: string, options?: RequestInit): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isLoading: false,
  };

  // state logic
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case ActionType.loading:
        state.isLoading = !state.isLoading
        return { ...initialState };
      case ActionType.fetched:
        return { ...initialState, data: action.payload };
      case ActionType.error:
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: ActionType.loading });

      // If a cache exists for this url, return it
      if (cache.current[url]) {
        dispatch({ type: ActionType.fetched, payload: cache.current[url] });
        return;
      }

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;
        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: ActionType.fetched, payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: ActionType.error, payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possible
    // state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return state;
}

export default useFetch;
