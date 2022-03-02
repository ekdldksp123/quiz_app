import { takeEvery, all, fork } from "redux-saga/effects";
/**
 * all: 파라미터로 전달받은 배열에 담긴 saga를 순서대로 실행시켜준다.
 * fork: saga를 수행하는 effect. 해당 effect 는 non-blocking 과 sync 로 task descriptor를 리턴한다.
 * takeEvery: action 이 발행되기를 기다리고 있다가 발행되었을 경우 saga를 실행시켜준다.
 */

// Saga
import * as TimerSaga from "./timer";

// Reducer
import * as TimerActions from "../redux/timer";

export default function* rootSaga() {
  // Root Saga
  yield all([fork(handleTimer)]); 
}

function* handleTimer() {
  yield takeEvery(TimerActions.start, TimerSaga.start);
  yield fork(TimerSaga.watcher);
}