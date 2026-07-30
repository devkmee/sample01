import { useSearchParams } from 'react-router-dom';
import characterData from '../datas/character';
import '../pages/Detail.css';

function Detail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const character = characterData.find((char) => char.id === id);

    return (
        <div style={{ display: 'flex', gap: '50px' }}>
            <img
                src={`/character/${id}.png`}
                alt={character.name}
                style={{
                    flex: 1,
                    width: '400px',
                    maxHeight: '300px',
                    padding: '50px',
                }}
            ></img>
            <div>
                {character.nameDesc ? (
                    <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>{character.nameDesc}</h1>
                ) : (
                    <h1 style={{ textAlign: 'center', marginBottom: '100px' }}>{character.name}</h1>
                )}
                <table>
                    <tbody>
                        <tr>
                            <th>종족</th>
                            <td>{character.race}</td>
                        </tr>
                        <tr>
                            <th>키</th>
                            <td>{Array.isArray(character.height) ? character.height.join(' / ') : character.height}</td>
                        </tr>
                        <tr>
                            <th>키워드</th>
                            <td>
                                {Array.isArray(character?.keywords)
                                    ? character?.keywords.join(' / ')
                                    : character?.keywords}
                            </td>
                        </tr>
                        <tr>
                            <th>모티프</th>
                            <td>
                                {character?.motif1 ? <p>{character?.motif1}</p> : ''}
                                {character?.motif2 ? <p>{character?.motif2}</p> : ''}
                            </td>
                        </tr>
                        <tr>
                            <th>외형</th>
                            <td>{character.appearance}</td>
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>식성</th>
                                    <td>{character?.diet}</td>
                                </>
                            ) : (
                                <>
                                    <th>의상</th>
                                    <td>{character?.clothes}</td>
                                </>
                            )}
                        </tr>
                        <tr>
                            <th>성격</th>
                            <td>{character.trait}</td>
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>두이름</th>
                                    <td>{character?.twonames}</td>
                                </>
                            ) : (
                                <>
                                    <th>직업</th>
                                    <td>{character?.jobs}</td>
                                </>
                            )}
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>하데스</th>
                                    <td>{character?.hades}</td>
                                </>
                            ) : (
                                <></>
                            )}
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>에메트셀크</th>
                                    <td>{character?.ascian}</td>
                                </>
                            ) : (
                                <></>
                            )}
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>능력</th>
                                    <td>{character?.skill}</td>
                                </>
                            ) : (
                                <>
                                    <th>과거</th>
                                    <td>{character?.past}</td>
                                </>
                            )}
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>습관</th>
                                    <td>{character?.habit}</td>
                                </>
                            ) : (
                                <>
                                    <th>취미</th>
                                    <td>
                                        {character.hobby1 ? <p>{character?.hobby1}</p> : ''}
                                        {character.hobby2 ? <p>{character?.hobby2}</p> : ''}
                                        {character.hobby3 ? <p>{character?.hobby3}</p> : ''}
                                    </td>
                                </>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Detail;
