import React from 'react';
import Typography from '@material-ui/core/Typography';
import { properties } from '../utils/properties';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        {properties.devName}
        {' '}  
        {new Date().getFullYear()}
      </Typography>
    );
  }