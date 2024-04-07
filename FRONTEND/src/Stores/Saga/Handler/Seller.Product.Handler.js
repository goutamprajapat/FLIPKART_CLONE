import { call, put } from "redux-saga/effects";
import {
  getAllProduct,
  getSingleProductService,
  postNewProduct,
  updateBrandLogoService,
  updateImageService,
  updateProductService,
  updateThumbnailService,
} from "../Services/Seller.Product.Services";
import {
  AddNewProductRedux,
  GET_SINGLE_PRODUCT_REDUX,
  UPDATE_SELLER_BRAND_LOGO_REDUX,
  UPDATE_SELLER_MULTIPLE_IMAGES_REDUX,
  UPDATE_SELLER_PRODUCTS_REDUX,
  UPDATE_SELLER_THUMBNAIL_REDUX,
  getAllProdctsRedux,
} from "../../Slice/Seller.Product.Slice";
import { startLoading, stopLoading } from "../../Slice/loading.Slice";

export function* addNewProductHandler(action) {
  try {
    const data = action.payload;
    const postData = yield call(postNewProduct, data);
    yield put(AddNewProductRedux(postData));
  } catch (error) {
    console.log(error);
  }
}

export function* getProductHandler(action) {
  try {
    yield put(startLoading());
    const data = action?.payload;
    const getData = yield call(getAllProduct, data);
    yield put(getAllProdctsRedux(getData));
    yield put(stopLoading());
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
export function* getSingleProductHandler(action) {
  try {
    yield put(startLoading());
    const id = action?.payload;
    const getData = yield call(getSingleProductService, id);
    yield put(stopLoading());
    yield put(GET_SINGLE_PRODUCT_REDUX(getData));
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
export function* UpdateProductHandler(action) {
  try {
    yield put(startLoading());
    const data = action?.payload;

    const getData = yield call(updateProductService, data);
    yield put(UPDATE_SELLER_PRODUCTS_REDUX(getData));
    yield put(stopLoading());
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
export function* UpdateBrandLogoHandler(action) {
  try {
    yield put(startLoading());
    const data = action?.payload;

    const getData = yield call(updateBrandLogoService, data);
    yield put(UPDATE_SELLER_BRAND_LOGO_REDUX(getData));
    yield put(stopLoading());
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
export function* UpdateThumbnailHandler(action) {
  try {
    yield put(startLoading());
    const data = action?.payload;

    const getData = yield call(updateThumbnailService, data);
    yield put(UPDATE_SELLER_THUMBNAIL_REDUX(getData));
    yield put(stopLoading());
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
export function* UpdateImagesHandler(action) {
  try {
    yield put(startLoading());
    const data = action?.payload;

    const getData = yield call(updateImageService, data);
    yield put(UPDATE_SELLER_MULTIPLE_IMAGES_REDUX(getData));
    yield put(stopLoading());
  } catch (error) {
    console.log(error);
    yield put(stopLoading());
  }
}
