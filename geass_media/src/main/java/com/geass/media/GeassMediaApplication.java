package com.geass.media;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.geass.media.mapper")
public class GeassMediaApplication {

	public static void main(String[] args) {
		SpringApplication.run(GeassMediaApplication.class, args);
	}

}
