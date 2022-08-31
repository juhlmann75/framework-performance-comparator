package juak.fpc;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

import java.util.Map;

@RestController
public class Controller {
    @GetMapping("/test")
    public Mono<Map<String, String>> getTest() {
        return Mono.just(Map.of("msg", "hello world"));
    }
}
