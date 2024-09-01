package bitc.fullstack405.boardapiserver.service;

import bitc.fullstack405.boardapiserver.dto.BoardDTO;

import java.util.List;

public interface BoardApiService {
    List<BoardDTO> selectBoardList() throws Exception;
}