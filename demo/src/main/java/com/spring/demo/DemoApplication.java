package com.spring.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.spring.demo.product.Product;
import com.spring.demo.product.ProductRepository;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner (ProductRepository repository) {
		return args -> {
		 var product = Product.builder().name("Iphone").description("Iphone 15 Pro max").build();
		 repository.insert(product);
		};
	}

}
