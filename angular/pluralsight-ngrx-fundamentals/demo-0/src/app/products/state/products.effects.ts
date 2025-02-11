import { Injectable } from "@angular/core";
import { ProductsService } from "../products.service";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductsAPIActions, ProductsPageActions } from "./products.actions";
import { catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";

@Injectable()
export class ProductEffects {
  constructor(
    private action$: Actions,
    private productsService: ProductsService
  ) {}


  loadProducts$ = createEffect( () =>
    this.action$.pipe(
      ofType(ProductsPageActions.loadProducts),
      concatMap(() =>
        this.productsService.getAll().pipe(
          map((products) =>
            ProductsAPIActions.productsLoadedSuccess({products})),
          catchError(
            (error) => of(ProductsAPIActions.productsLoadedFail({message: error}))
          )
        )
      )
    )
  );

  addProducts$ = createEffect( () =>
    this.action$.pipe(
      ofType(ProductsPageActions.addProduct),
      mergeMap(({product}) =>
        this.productsService.add(product).pipe(
          map((newProduct) =>
            ProductsAPIActions.productAddedSuccess({ product: newProduct })),
          catchError(
            (error) => of(ProductsAPIActions.productAddedFail({message: error}))
          )
        )
      )
    )
  );

  updateProducts$ = createEffect( () =>
    this.action$.pipe(
      ofType(ProductsPageActions.updateProduct),
      concatMap(( {product}) =>
        this.productsService.update (product).pipe(
          map((product) =>
            ProductsAPIActions.productUpdatedSuccess({ product })),
          catchError(
            (error) => of(ProductsAPIActions.productUpdatedFail({message: error}))
          )
        )
      )
    )
  );

  deleteProducts$ = createEffect( () =>
    this.action$.pipe(
      ofType(ProductsPageActions.deleteProduct),
      concatMap(( {id}) =>
        this.productsService.delete (id).pipe(
          map((product) =>
            ProductsAPIActions.productDeletedSuccess({ id })),
          catchError(
            (error) => of(ProductsAPIActions.productDeletedFail({message: error}))
          )
        )
      )
    )
  );



}
