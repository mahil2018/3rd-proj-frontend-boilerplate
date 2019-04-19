import React from 'react';
import Label from './Label'

export class GreenLabel extends Label{
  constructor(props){
    super(props);
    this.className = this.className + ' green-label';
  }
}