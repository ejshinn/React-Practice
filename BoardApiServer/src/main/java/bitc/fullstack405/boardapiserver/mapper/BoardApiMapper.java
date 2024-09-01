package bitc.fullstack405.boardapiserver.mapper;

import bitc.fullstack405.boardapiserver.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardApiMapper {
    List<BoardDTO> selectBoardList() throws Exception;
}
