import React, { Component } from "react";
import{FaCheckCircle, FaRegCheckCircle} from 'react-icons/fa';

  $('.fa-check-circle').on('click', function(e) {
    $(this).find("i").toggleClass("far fas");
    e.preventDefault();});
  
  