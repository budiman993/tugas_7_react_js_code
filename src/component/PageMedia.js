import React from 'react';
import {Media} from 'react-bootstrap';

function PageMedia(){
	return(
		<Media>
  <img
    width="40"
    height="40"
    className="mr-3"
    src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg"
    alt="Foto Profil"
  />
  <Media.Body>
    <h3>Andreas</h3>
  </Media.Body>
</Media>
		)
}

export default PageMedia;