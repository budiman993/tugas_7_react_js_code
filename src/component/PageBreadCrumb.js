import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

function PageBreadCrumb(){
	return(
		<Breadcrumb>
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
		<Breadcrumb.Item href="#">
		Berita
		</Breadcrumb.Item>
		<Breadcrumb.Item active>Bola</Breadcrumb.Item>
		</Breadcrumb>

		)
	}

	export default PageBreadCrumb;