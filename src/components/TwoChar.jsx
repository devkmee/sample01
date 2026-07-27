import { useNavigate } from 'react-router-dom';
import characterData from '../datas/character.js';

function TwoChar() {
    const navigate = useNavigate();

    const character01 = characterData.find((char) => char.id === 'char_1');
    const character02 = characterData.find((char) => char.id === 'char_2');
    console.log(character01, character02);
    console.log(character01, character02);

    const handleClick = (id) => {
        navigate(`/detail?id=${id}`);
    };

    return (
        <>
            {/* <div className="flex flex-col items-center justify-center gap-4"></div> */}

            <div
                style={{ display: 'flex', gap: '100px', justifyContent: 'center', alignItems: 'center', width: '100%' }}
            >
                <div
                    onClick={() => handleClick('char_1')}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <img
                        className="img-content"
                        src={`/character/${character01.id}.png`}
                        alt="char_1"
                        style={{
                            flex: 1,
                            width: '400px',
                            height: '500px',
                            maxheight: '380px',
                        }}
                    ></img>
                    <h2 className="text-center">{character01?.name}</h2>
                </div>
                <div
                    onClick={() => handleClick('char_2')}
                    style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                >
                    <img
                        className="img-content"
                        src={`/character/${character02.id}.png`}
                        // src={`/character/${character02.id}.png`?}

                        alt="char_2"
                        style={{
                            flex: 1,
                            width: '400px',
                            height: '500px',
                        }}
                    ></img>
                    <h2 className="text-center">{character02?.name}</h2>
                </div>
            </div>
        </>
    );
}
export default TwoChar;
