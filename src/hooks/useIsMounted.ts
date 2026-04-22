import { useSyncExternalStore } from "react";

/**
 * Returns `true` after the component has mounted on the client.
 * Use this to avoid SSR hydration mismatches for client-only logic.
 */
export function useIsMounted(): boolean {
    return useSyncExternalStore(
        () => () => {},
        () => true,
        () => false
    );
}

