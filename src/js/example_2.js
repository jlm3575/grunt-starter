var my_obj_2 = {
  my_first_function: function (param1, param2) {
    if (param1 < 0) {
      return true;
    } else if (param2 > 0) {
      return false;
    }

    return param1 === param2;
  },my_second_function: function (param1, param2) {
    if (param1 === '') {
      return param2;
    }

    return '' + param1 + param2;
  }
};
