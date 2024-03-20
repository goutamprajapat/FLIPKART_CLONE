import { takeLatest } from "redux-saga/effects";
import {
  AddNewProductSellerSaga,
  GET_ALL_PRODUCTS_SAGA,
} from "../../Slice/Seller.Product.Slice";
import {
  addNewProductHandler,
  getProductHandler,
} from "../Handler/Seller.Product.Handler";
export function* AddNewProductWatcher() {
  yield takeLatest(AddNewProductSellerSaga.type, addNewProductHandler);
}
export function* getAllProductWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS_SAGA.type, getProductHandler);
}
