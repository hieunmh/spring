package com.spring.demo.product;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/products")
@RequiredArgsConstructor
public class ProductController {
  
  private final ProductService service;

  @PostMapping
  public ResponseEntity<String> save(@RequestBody Product product) {
    return ResponseEntity.ok(service.save(product));
  } 

  @GetMapping
  public ResponseEntity<List<Product>> findAll() {
    return ResponseEntity.ok(service.findAll());
  }

  @GetMapping("/{product-id}")
  public ResponseEntity<Product> findByID(@PathVariable("product-id") String productID) {
    return ResponseEntity.ok(service.findByID(productID));
  }

  @DeleteMapping("/{product-id}")
  public ResponseEntity<Void> delete(@PathVariable("product-id") String productID) {
    service.delete(productID);
    return ResponseEntity.accepted().build();
  }
}

