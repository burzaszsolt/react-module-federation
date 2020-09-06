import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const CartBadge = ({ cart }) => {
  let history = useHistory();
  const [cartNum, setCartNum] = useState(cart.length);

  useEffect(() => {
    setCartNum(cart.length);
  }, [cart]);

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