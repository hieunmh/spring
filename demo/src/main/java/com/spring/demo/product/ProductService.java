package com.spring.demo.product;

import java.util.List;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class ProductService {

  private final ProductRepository repository;
  
  @SuppressWarnings("null")
  public String save(Product product) {
    return repository.save(product).getId();
  }

  @SuppressWarnings("null")
  public Product findByID(String id) {
    return repository.findById(id).orElse(null);
  }

  public List<Product> findAll() {
    return repository.findAll();
  }

  @SuppressWarnings("null")
  public void delete(String id) {
    repository.deleteById(id);
  }
}
