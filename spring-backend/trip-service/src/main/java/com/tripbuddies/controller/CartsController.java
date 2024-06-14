package com.tripbuddies.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.CompletableFuture;

import com.commercetools.api.models.cart.Cart;
import com.commercetools.api.models.product.Product;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.tripbuddies.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartsController {
    @Autowired
    private CartService cartService;
    
    @PostMapping("/addTripToCart")
    public CompletableFuture<Cart> addItemToCartAnonymous(@RequestBody Product product) throws JsonProcessingException {
        return cartService.addTripToCartAnonymous(product);
    }
}
