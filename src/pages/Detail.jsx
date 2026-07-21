import { useSearchParams } from 'react-router-dom';
import characterData from '../datas/character';
import '../pages/main/Detail.css';

function Detail() {
    const [searchParams] = useSearchParams();
    const id = searchParams.get('id');

    const character = characterData.find((char) => char.id === id);
    console.log(id);
    console.log(character);
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
                {character.nameDesc ? <h3>{character.nameDesc}</h3> : ''}
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
                                {Array.isArray(character.keywords)
                                    ? character.keywords.join(' / ')
                                    : character.keywords}
                            </td>
                        </tr>
                        <tr>
                            <th>외형</th>
                            <td>{character.appearance}</td>
                        </tr>
                        <tr>
                            <th>모티프</th>
                            <td>
                                {character.motif1 ? <p>{character.motif1}</p> : ''}
                                {character.motif2 ? <p>{character.motif2}</p> : ''}
                            </td>
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>두이름</th>
                                    <td>{character.twonames}</td>
                                </>
                            ) : (
                                <>
                                    <th>직업</th>
                                    <td>{character.jobs}</td>
                                </>
                            )}
                        </tr>
                        <tr>
                            {character.id === 'char_1' ? (
                                <>
                                    <th>능력</th>
                                    <td>{character.skill}</td>
                                </>
                            ) : (
                                <>
                                    <th>과거</th>
                                    <td>{character.past}</td>
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
