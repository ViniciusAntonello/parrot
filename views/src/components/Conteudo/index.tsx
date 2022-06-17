import React from 'react';
import user1 from '../../assets/user1.svg';
import user2 from '../../assets/user2.svg';

const Conteudo: React.FC = () => {
    return (
        <section>
            <div>
                <img src={user1} alt="usuario 1" />
                <textarea name="postagem" id="postagem"></textarea>
            </div>

            <div>
                <div>
                    <img src={user2} alt="usuario 2" />
                </div>
                <div>
                    <h6>Vinícius - apê 42</h6>
                    <p>10/06/2022 09:00</p>
                </div>
                <div>
                    <p>Poxa galera, vamos respeitar o horário de silêncio! Tinha alguém usando furadeira 2 HORAS DA MANHÃ!!! ó_ó</p>
                </div>
            </div>
        </section>
    );
}

export default Conteudo;