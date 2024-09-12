const selectDatas = state => state.counter.dataTable;
const selectButtonState = state => state.counter.buttonState;
const selectNavState = state => state.counter.navigatorLinkNav;

export {selectDatas, selectButtonState, selectNavState};