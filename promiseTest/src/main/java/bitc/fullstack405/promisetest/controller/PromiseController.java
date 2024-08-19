package bitc.fullstack405.promisetest.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/async")
public class PromiseController {

    @GetMapping("/data1")
    public String getData1() {
        return "data1";
    }

    @ResponseBody
    @PostMapping("/data1")
    public Object postData() {
        return "success";
    }
}
