package bitc.fullstack405.restapiserver.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @RequestMapping("/test")
    public String index() throws Exception {
        return "Axios용 TestController 접속 성공";
    }
}
