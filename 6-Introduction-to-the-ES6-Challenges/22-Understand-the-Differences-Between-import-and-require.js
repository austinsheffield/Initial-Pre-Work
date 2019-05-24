//Learned the differences btwn import and require. Import allows us to choose which parts of a module of file to load into a file.
//Whitespace surrounding function is best practice
//Most of the time, file path requires ./ before it. Otherwise the node will look in node_modules directory first trying to load as dependency.
"use strict";
import { capitalizeString } from "string_functions";
capitalizeString("hello!");
