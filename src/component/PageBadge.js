import React from 'react';
import {Button, Badge} from 'react-bootstrap';

function PageBadge(){
	return(
    <div>
	<Button variant="primary">
  Notification <Badge variant="light">9</Badge>
  <span className="sr-only">Notification</span>
  </Button>
    <Button variant="primary">
  Message <Badge variant="light">19</Badge>
  <span className="sr-only">unread messages</span>
  </Button></div>
		)
}

export default PageBadge;