import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { AboutSlice } from "../Fetches/AboutInfo/AboutSlice";
import { initialAbout } from "../Fetches/AboutInfo/initialAbout";
import { initialLang } from "../Fetches/LangSlice/initialLang";
import { langSlice } from "../Fetches/LangSlice/langSlice";
import { myMapSlice } from "../Fetches/MyMap/mapSlice";
import { regionsLangs } from "../Fetches/MyMap/myMap";

export const store = createStore(combineReducers({
  myMap: myMapSlice,
  currentLang: langSlice,
  aboutPage: AboutSlice

}), {
  myMap: regionsLangs,
  currentLang: initialLang(),
  aboutPage: initialAbout

}, applyMiddleware(thunk)
)