package bitc.fullstack405.boardapiserver.controller;

import bitc.fullstack405.boardapiserver.dto.BoardDTO;
import bitc.fullstack405.boardapiserver.service.BoardApiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173"})
@RestController
@RequestMapping("/api")
public class BoardApiController {

    @Autowired
    private BoardApiService boardApiService;

    @GetMapping({"", "/"})
    public String index() throws Exception {
        return "Board API Server 접속";
    }

    @GetMapping("/boardList")
    public Object selectBoardList() throws Exception {
        List<BoardDTO> boardList = boardApiService.selectBoardList();

        return boardList;
    }
}