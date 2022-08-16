package juak.fpc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class Controller {

    @GetMapping("/test")
    public Map<String, String> getTest() {
        return Map.of("msg", "hello world");
    }
}
