package nl.skeleton.ngrx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"nl.skeleton.ngrx.controllers"})
public class NgrxApplication {

	public static void main(String[] args) {
		SpringApplication.run(NgrxApplication.class, args);
	}

}
