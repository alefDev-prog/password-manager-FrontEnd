import { createGlobalState } from "react-hooks-global-state";

interface StateType {userId: string};

const {setGlobalState, useGlobalState} = createGlobalState<StateType>({
    userId: "hello",
});

export {useGlobalState, setGlobalState};