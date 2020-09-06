import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartBadge = ({ cart }) => {
  let history = useHistory();
  const [cartNum] = useState(cart.length);

  const handleClick = () => history.push('/cart');

  return (
    <IconButton onClick={handleClick} aria-label={`show ${cartNum} products`}>
      <Badge badgeContent={cartNum} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  )
};

export default CartBadge;