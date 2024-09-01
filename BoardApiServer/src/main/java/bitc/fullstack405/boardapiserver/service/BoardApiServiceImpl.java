package bitc.fullstack405.boardapiserver.service;

import bitc.fullstack405.boardapiserver.dto.BoardDTO;
import bitc.fullstack405.boardapiserver.mapper.BoardApiMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardApiServiceImpl implements BoardApiService {

    @Autowired
    private BoardApiMapper boardApiMapper;

    @Override
    public List<BoardDTO> selectBoardList() throws Exception {
        return boardApiMapper.selectBoardList();
    }
}
