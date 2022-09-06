package juak.fpc;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;

import java.util.Map;

@Controller("/test")
public class TestController {

    @Get(produces = MediaType.APPLICATION_JSON)
    public Map<String, String> index() {
        return Map.of("msg", "hello world");
    }
}
