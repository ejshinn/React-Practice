package bitc.fullstack405.backend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:5173")
@RestController
public class BackendController {
    @RequestMapping("/hello")
    public String index() {
        return "hello world";
    }
}
