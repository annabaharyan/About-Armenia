import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { initialLang } from "../Fetches/LangSlice/initialLang";
import { langSlice } from "../Fetches/LangSlice/langSlice";
import { myMapSlice } from "../Fetches/MyMap/mapSlice";
import { regionsLangs } from "../Fetches/MyMap/myMap";

export const store = createStore(combineReducers({
  myMap:myMapSlice,
  currentLang:langSlice,
    
}), {
    myMap: regionsLangs,
    currentLang:initialLang()

}, applyMiddleware(thunk)
)