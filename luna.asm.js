Module["asm"] =  (function(global,env,buffer) {

 "almost asm";
 var a = new global.Int8Array(buffer);
 var b = new global.Int16Array(buffer);
 var c = new global.Int32Array(buffer);
 var d = new global.Uint8Array(buffer);
 var e = new global.Uint16Array(buffer);
 var f = new global.Uint32Array(buffer);
 var g = new global.Float32Array(buffer);
 var h = new global.Float64Array(buffer);
 var i = env.STACKTOP | 0;
 var j = env.STACK_MAX | 0;
 var k = env.DYNAMICTOP_PTR | 0;
 var l = env.tempDoublePtr | 0;
 var m = env.ABORT | 0;
 var n = env.cttz_i8 | 0;
 var o = 0;
 var p = 0;
 var q = 0;
 var r = 0;
 var s = global.NaN, t = global.Infinity;
 var u = 0, v = 0, w = 0, x = 0, y = 0.0, z = 0, A = 0, B = 0, C = 0.0;
 var D = 0;
 var E = global.Math.floor;
 var F = global.Math.abs;
 var G = global.Math.sqrt;
 var H = global.Math.pow;
 var I = global.Math.cos;
 var J = global.Math.sin;
 var K = global.Math.tan;
 var L = global.Math.acos;
 var M = global.Math.asin;
 var N = global.Math.atan;
 var O = global.Math.atan2;
 var P = global.Math.exp;
 var Q = global.Math.log;
 var R = global.Math.ceil;
 var S = global.Math.imul;
 var T = global.Math.min;
 var U = global.Math.max;
 var V = global.Math.clz32;
 var W = global.Math.fround;
 var X = env.abort;
 var Y = env.assert;
 var Z = env.enlargeMemory;
 var _ = env.getTotalMemory;
 var $ = env.abortOnCannotGrowMemory;
 var aa = env.invoke_iiii;
 var ba = env.invoke_vi;
 var ca = env.invoke_vii;
 var da = env.invoke_ii;
 var ea = env.invoke_iiiii;
 var fa = env.invoke_iii;
 var ga = env.invoke_iiiiii;
 var ha = env._pthread_cleanup_pop;
 var ia = env.___syscall221;
 var ja = env.___unlock;
 var ka = env.___setErrNo;
 var la = env.___lock;
 var ma = env._abort;
 var na = env._pthread_cleanup_push;
 var oa = env.___syscall6;
 var pa = env.___syscall5;
 var qa = env._llvm_cttz_i32;
 var ra = env._emscripten_memcpy_big;
 var sa = env.___syscall54;
 var ta = env.___syscall140;
 var ua = env._exit;
 var va = env.__exit;
 var wa = env.___syscall145;
 var xa = env.___syscall146;
 var ya = env.___syscall10;
 var za = W(0);
 const Aa = W(0);
 
// EMSCRIPTEN_START_FUNCS

function Qa(e, f) {
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0.0;
 K = i;
 i = i + 720 | 0;
 J = K + 664 | 0;
 C = K + 264 | 0;
 D = K + 136 | 0;
 E = K + 8 | 0;
 F = K;
 H = e;
 G = (H & 3 | 0) == 0;
 a : do if (G) {
  g = e;
  I = 4;
 } else {
  h = e;
  g = H;
  while (1) {
   if (!(a[h >> 0] | 0)) break a;
   h = h + 1 | 0;
   g = h;
   if (!(g & 3)) {
    g = h;
    I = 4;
    break;
   }
  }
 } while (0);
 if ((I | 0) == 4) {
  while (1) {
   h = c[g >> 2] | 0;
   if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
  }
  if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
 }
 g = g - H | 0;
 if (g >>> 0 > 4) {
  l = e + g + -4 | 0;
  g = a[l >> 0] | 0;
  m = g & 255;
  n = g << 24 >> 24 == 0;
  b : do if (n) {
   j = 46;
   h = 0;
  } else {
   if (g << 24 >> 24 != 46) if ((((m + -65 | 0) >>> 0 < 26 ? m | 32 : m) | 0) != 46) {
    j = 46;
    h = g;
    break;
   }
   j = l + 1 | 0;
   h = a[j >> 0] | 0;
   k = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 120;
     h = 0;
     break b;
    }
   case 120:
    break;
   default:
    if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) != 120) {
     j = 120;
     break b;
    }
   }
   j = j + 1 | 0;
   h = a[j >> 0] | 0;
   k = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 109;
     h = 0;
     break b;
    }
   case 109:
    break;
   default:
    if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) != 109) {
     j = 109;
     break b;
    }
   }
   k = j + 1 | 0;
   h = a[k >> 0] | 0;
   j = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 108;
     h = 0;
     break b;
    }
   case 108:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 108) {
     j = 108;
     break b;
    }
   }
   j = 0;
   h = a[k + 1 >> 0] | 0;
  } while (0);
  k = h & 255;
  k = (((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) == (((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0);
  c : do if (n) {
   h = 46;
   g = 0;
  } else {
   if (g << 24 >> 24 != 46) if ((((m + -65 | 0) >>> 0 < 26 ? m | 32 : m) | 0) != 46) {
    h = 46;
    break;
   }
   h = l + 1 | 0;
   g = a[h >> 0] | 0;
   j = g & 255;
   switch (g << 24 >> 24) {
   case 0:
    {
     h = 108;
     g = 0;
     break c;
    }
   case 108:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 108) {
     h = 108;
     break c;
    }
   }
   h = h + 1 | 0;
   g = a[h >> 0] | 0;
   j = g & 255;
   switch (g << 24 >> 24) {
   case 0:
    {
     h = 117;
     g = 0;
     break c;
    }
   case 117:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 117) {
     h = 117;
     break c;
    }
   }
   j = h + 1 | 0;
   g = a[j >> 0] | 0;
   h = g & 255;
   switch (g << 24 >> 24) {
   case 0:
    {
     h = 97;
     g = 0;
     break c;
    }
   case 97:
    break;
   default:
    if ((((h + -65 | 0) >>> 0 < 26 ? h | 32 : h) | 0) != 97) {
     h = 97;
     break c;
    }
   }
   h = 0;
   g = a[j + 1 >> 0] | 0;
  } while (0);
  B = g & 255;
  if ((((h + -65 | 0) >>> 0 < 26 ? h | 32 : h) | 0) == (((B + -65 | 0) >>> 0 < 26 ? B | 32 : B) | 0)) {
   A = 1;
   j = k;
   k = a[e >> 0] | 0;
  } else {
   j = k;
   I = 20;
  }
 } else {
  j = 0;
  I = 20;
 }
 if ((I | 0) == 20) {
  k = a[e >> 0] | 0;
  if (k << 24 >> 24 == 45) {
   g = a[e + 1 >> 0] | 0;
   h = 0;
  } else {
   g = k;
   h = 45;
  }
  A = h << 24 >> 24 == g << 24 >> 24;
 }
 m = j ? 16121 : A ? 15848 : 0;
 B = j ? 14 : A ? 272 : 0;
 z = j ? 0 : A ? 8 : 0;
 if (k << 24 >> 24 == 45) {
  g = 20481;
  h = e;
  do {
   h = h + 1 | 0;
   g = g + 1 | 0;
   k = a[h >> 0] | 0;
   l = a[g >> 0] | 0;
  } while (!(k << 24 >> 24 == 0 ? 1 : k << 24 >> 24 != l << 24 >> 24));
  if (k << 24 >> 24 == l << 24 >> 24) y = 14040; else I = 26;
 } else I = 26;
 if ((I | 0) == 26) {
  g = Kb(e, 17213) | 0;
  if (!g) {
   d : do if (!0) {
    g = 16136;
    I = 30;
   } else {
    g = 16136;
    h = 16136;
    while (1) {
     if (!(a[g >> 0] | 0)) {
      g = h;
      break d;
     }
     g = g + 1 | 0;
     h = g;
     if (!(h & 3)) {
      I = 30;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 30) {
    while (1) {
     h = c[g >> 2] | 0;
     if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
    }
    if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   j = g - 16136 | 0;
   g = c[3542] | 0;
   do if (!g) {
    g = a[14226] | 0;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     h = c[3549] | 0;
     c[3545] = h;
     c[3543] = h;
     g = h + (c[3550] | 0) | 0;
     c[3542] = g;
     I = 40;
     break;
    } else {
     c[3538] = g | 32;
     g = 0;
     I = 43;
     break;
    }
   } else {
    h = c[3543] | 0;
    I = 40;
   } while (0);
   do if ((I | 0) == 40) if ((g - h | 0) >>> 0 < j >>> 0) {
    g = Ba[c[14188 >> 2] & 7](14152, 16136, j) | 0;
    I = 43;
    break;
   } else {
    bc(h | 0, 16136, j | 0) | 0;
    c[3543] = (c[3543] | 0) + j;
    break;
   } while (0);
   if ((I | 0) == 43) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
    J = 1;
    i = K;
    return J | 0;
   }
   j = a[14227] | 0;
   if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
    g = c[3543] | 0;
    h = c[3542] | 0;
    if (g >>> 0 < h >>> 0) {
     c[3543] = g + 1;
     a[g >> 0] = 10;
     J = 1;
     i = K;
     return J | 0;
    }
   }
   a[J >> 0] = 10;
   do if (!h) {
    j = b[7113] | 0;
    g = (j & 65535) << 24 >> 24;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     k = c[3549] | 0;
     c[3545] = k;
     c[3543] = k;
     h = k + (c[3550] | 0) | 0;
     c[3542] = h;
     g = (j & 65535) >>> 8 & 255;
     I = 54;
     break;
    } else {
     c[3538] = g | 32;
     break;
    }
   } else {
    k = c[3543] | 0;
    g = j;
    I = 54;
   } while (0);
   do if ((I | 0) == 54) if (g << 24 >> 24 == 10 | k >>> 0 >= h >>> 0) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = k + 1;
    a[k >> 0] = 10;
    break;
   } while (0);
   J = 1;
   i = K;
   return J | 0;
  } else y = g;
 }
 k = (B | 1024) + z | 0;
 g = Qb(k) | 0;
 if (!g) {
  e : do if (!2) {
   g = 16158;
   I = 62;
  } else {
   g = 16158;
   h = 16158;
   while (1) {
    if (!(a[g >> 0] | 0)) {
     g = h;
     break e;
    }
    g = g + 1 | 0;
    h = g;
    if (!(h & 3)) {
     I = 62;
     break;
    }
   }
  } while (0);
  if ((I | 0) == 62) {
   while (1) {
    h = c[g >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
  }
  j = g - 16158 | 0;
  g = c[3542] | 0;
  do if (!g) {
   g = a[14226] | 0;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    I = 72;
    break;
   } else {
    c[3538] = g | 32;
    g = 0;
    I = 75;
    break;
   }
  } else {
   h = c[3543] | 0;
   I = 72;
  } while (0);
  do if ((I | 0) == 72) if ((g - h | 0) >>> 0 < j >>> 0) {
   g = Ba[c[14188 >> 2] & 7](14152, 16158, j) | 0;
   I = 75;
   break;
  } else {
   bc(h | 0, 16158, j | 0) | 0;
   c[3543] = (c[3543] | 0) + j;
   I = 77;
   break;
  } while (0);
  if ((I | 0) == 75) if ((g | 0) == (j | 0)) I = 77; else if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) >= 0) I = 77;
  do if ((I | 0) == 77) {
   j = a[14227] | 0;
   if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
    g = c[3543] | 0;
    h = c[3542] | 0;
    if (g >>> 0 < h >>> 0) {
     c[3543] = g + 1;
     a[g >> 0] = 10;
     break;
    }
   }
   a[J >> 0] = 10;
   do if (!h) {
    j = b[7113] | 0;
    g = (j & 65535) << 24 >> 24;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     k = c[3549] | 0;
     c[3545] = k;
     c[3543] = k;
     h = k + (c[3550] | 0) | 0;
     c[3542] = h;
     g = (j & 65535) >>> 8 & 255;
     I = 86;
     break;
    } else {
     c[3538] = g | 32;
     break;
    }
   } else {
    k = c[3543] | 0;
    g = j;
    I = 86;
   } while (0);
   do if ((I | 0) == 86) if (g << 24 >> 24 == 10 | k >>> 0 >= h >>> 0) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = k + 1;
    a[k >> 0] = 10;
    break;
   } while (0);
  } while (0);
  Lb(y) | 0;
  J = 1;
  i = K;
  return J | 0;
 }
 bc(g | 0, m | 0, B | 0) | 0;
 n = g + B | 0;
 v = y + 74 | 0;
 w = a[v >> 0] | 0;
 a[v >> 0] = w + 255 | w;
 w = y + 8 | 0;
 x = y + 4 | 0;
 l = c[x >> 2] | 0;
 h = (c[w >> 2] | 0) - l | 0;
 if ((h | 0) > 0) {
  m = h >>> 0 < 1024 ? h : 1024;
  bc(n | 0, l | 0, m | 0) | 0;
  c[x >> 2] = l + m;
  h = 1024 - m | 0;
  if (!h) I = 101; else {
   n = n + m | 0;
   I = 93;
  }
 } else {
  h = 1024;
  I = 93;
 }
 f : do if ((I | 0) == 93) {
  m = y + 32 | 0;
  o = y + 20 | 0;
  p = y + 44 | 0;
  q = y + 36 | 0;
  r = y + 16 | 0;
  s = y + 28 | 0;
  while (1) {
   u = a[v >> 0] | 0;
   a[v >> 0] = u + 255 | u;
   if ((c[o >> 2] | 0) >>> 0 > (c[p >> 2] | 0) >>> 0) Ba[c[q >> 2] & 7](y, 0, 0) | 0;
   c[r >> 2] = 0;
   c[s >> 2] = 0;
   c[o >> 2] = 0;
   l = c[y >> 2] | 0;
   if (l & 20 | 0) break;
   l = c[p >> 2] | 0;
   c[w >> 2] = l;
   c[x >> 2] = l;
   l = Ba[c[m >> 2] & 7](y, n, h) | 0;
   if ((l + 1 | 0) >>> 0 < 2) break f;
   h = h - l | 0;
   if (!h) {
    I = 101;
    break f;
   } else n = n + l | 0;
  }
  if (l & 4) c[y >> 2] = l | 32;
 } while (0);
 g : do if ((I | 0) == 101) {
  k = k + 1024 | 0;
  g = Sb(g, k) | 0;
  h : do if (g | 0) {
   p = y + 32 | 0;
   q = y + 20 | 0;
   r = y + 44 | 0;
   s = y + 36 | 0;
   t = y + 16 | 0;
   u = y + 28 | 0;
   o = B;
   i : while (1) {
    o = o + 1024 | 0;
    n = g + o | 0;
    l = a[v >> 0] | 0;
    a[v >> 0] = l + 255 | l;
    l = c[x >> 2] | 0;
    h = (c[w >> 2] | 0) - l | 0;
    if ((h | 0) > 0) {
     m = h >>> 0 < 1024 ? h : 1024;
     bc(n | 0, l | 0, m | 0) | 0;
     c[x >> 2] = l + m;
     h = 1024 - m | 0;
     if (h | 0) {
      m = n + m | 0;
      I = 168;
     }
    } else {
     h = 1024;
     m = n;
     I = 168;
    }
    if ((I | 0) == 168) while (1) {
     I = 0;
     n = a[v >> 0] | 0;
     a[v >> 0] = n + 255 | n;
     if ((c[q >> 2] | 0) >>> 0 > (c[r >> 2] | 0) >>> 0) Ba[c[s >> 2] & 7](y, 0, 0) | 0;
     c[t >> 2] = 0;
     c[u >> 2] = 0;
     c[q >> 2] = 0;
     l = c[y >> 2] | 0;
     if (l & 20 | 0) break i;
     l = c[r >> 2] | 0;
     c[w >> 2] = l;
     c[x >> 2] = l;
     l = Ba[c[p >> 2] & 7](y, m, h) | 0;
     if ((l + 1 | 0) >>> 0 < 2) break g;
     h = h - l | 0;
     if (!h) break; else {
      m = m + l | 0;
      I = 168;
     }
    }
    k = k + 1024 | 0;
    g = Sb(g, k) | 0;
    if (!g) break h;
   }
   if (!(l & 4)) break g;
   c[y >> 2] = l | 32;
   break g;
  } while (0);
  j : do if (!2) {
   g = 16158;
   I = 138;
  } else {
   g = 16158;
   h = 16158;
   while (1) {
    if (!(a[g >> 0] | 0)) {
     g = h;
     break j;
    }
    g = g + 1 | 0;
    h = g;
    if (!(h & 3)) {
     I = 138;
     break;
    }
   }
  } while (0);
  if ((I | 0) == 138) {
   while (1) {
    h = c[g >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
  }
  j = g - 16158 | 0;
  g = c[3542] | 0;
  do if (!g) {
   g = a[14226] | 0;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    I = 148;
    break;
   } else {
    c[3538] = g | 32;
    g = 0;
    I = 151;
    break;
   }
  } else {
   h = c[3543] | 0;
   I = 148;
  } while (0);
  do if ((I | 0) == 148) if ((g - h | 0) >>> 0 < j >>> 0) {
   g = Ba[c[14188 >> 2] & 7](14152, 16158, j) | 0;
   I = 151;
   break;
  } else {
   bc(h | 0, 16158, j | 0) | 0;
   c[3543] = (c[3543] | 0) + j;
   break;
  } while (0);
  if ((I | 0) == 151) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
   J = 1;
   i = K;
   return J | 0;
  }
  j = a[14227] | 0;
  if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
   g = c[3543] | 0;
   h = c[3542] | 0;
   if (g >>> 0 < h >>> 0) {
    c[3543] = g + 1;
    a[g >> 0] = 10;
    J = 1;
    i = K;
    return J | 0;
   }
  }
  a[J >> 0] = 10;
  do if (!h) {
   j = b[7113] | 0;
   g = (j & 65535) << 24 >> 24;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    k = c[3549] | 0;
    c[3545] = k;
    c[3543] = k;
    h = k + (c[3550] | 0) | 0;
    c[3542] = h;
    g = (j & 65535) >>> 8 & 255;
    I = 162;
    break;
   } else {
    c[3538] = g | 32;
    break;
   }
  } else {
   k = c[3543] | 0;
   g = j;
   I = 162;
  } while (0);
  do if ((I | 0) == 162) if (g << 24 >> 24 == 10 | k >>> 0 >= h >>> 0) {
   Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
   break;
  } else {
   c[3543] = k + 1;
   a[k >> 0] = 10;
   break;
  } while (0);
  J = 1;
  i = K;
  return J | 0;
 } while (0);
 h = k - h | 0;
 g = Sb(g, h) | 0;
 if (!g) {
  k : do if (!2) {
   g = 16158;
   I = 107;
  } else {
   g = 16158;
   h = 16158;
   while (1) {
    if (!(a[g >> 0] | 0)) {
     g = h;
     break k;
    }
    g = g + 1 | 0;
    h = g;
    if (!(h & 3)) {
     I = 107;
     break;
    }
   }
  } while (0);
  if ((I | 0) == 107) {
   while (1) {
    h = c[g >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
  }
  j = g - 16158 | 0;
  g = c[3542] | 0;
  do if (!g) {
   g = a[14226] | 0;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    I = 117;
    break;
   } else {
    c[3538] = g | 32;
    g = 0;
    I = 120;
    break;
   }
  } else {
   h = c[3543] | 0;
   I = 117;
  } while (0);
  do if ((I | 0) == 117) if ((g - h | 0) >>> 0 < j >>> 0) {
   g = Ba[c[14188 >> 2] & 7](14152, 16158, j) | 0;
   I = 120;
   break;
  } else {
   bc(h | 0, 16158, j | 0) | 0;
   c[3543] = (c[3543] | 0) + j;
   break;
  } while (0);
  if ((I | 0) == 120) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
   J = 1;
   i = K;
   return J | 0;
  }
  j = a[14227] | 0;
  if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
   g = c[3543] | 0;
   h = c[3542] | 0;
   if (g >>> 0 < h >>> 0) {
    c[3543] = g + 1;
    a[g >> 0] = 10;
    J = 1;
    i = K;
    return J | 0;
   }
  }
  a[J >> 0] = 10;
  do if (!h) {
   j = b[7113] | 0;
   g = (j & 65535) << 24 >> 24;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    k = c[3549] | 0;
    c[3545] = k;
    c[3543] = k;
    h = k + (c[3550] | 0) | 0;
    c[3542] = h;
    g = (j & 65535) >>> 8 & 255;
    I = 131;
    break;
   } else {
    c[3538] = g | 32;
    break;
   }
  } else {
   k = c[3543] | 0;
   g = j;
   I = 131;
  } while (0);
  do if ((I | 0) == 131) if (g << 24 >> 24 == 10 | k >>> 0 >= h >>> 0) {
   Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
   break;
  } else {
   c[3543] = k + 1;
   a[k >> 0] = 10;
   break;
  } while (0);
  J = 1;
  i = K;
  return J | 0;
 }
 o = h - B - z | 0;
 Lb(y) | 0;
 l : do if (j | A) {
  n = Qb((j ? 14 : A ? 280 : 0) + (o << 2) | 0) | 0;
  if (!n) {
   m : do if (!0) {
    g = 15540;
    I = 181;
   } else {
    g = 15540;
    h = 15540;
    while (1) {
     if (!(a[g >> 0] | 0)) {
      g = h;
      break m;
     }
     g = g + 1 | 0;
     h = g;
     if (!(h & 3)) {
      I = 181;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 181) {
    while (1) {
     h = c[g >> 2] | 0;
     if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
    }
    if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   j = g - 15540 | 0;
   g = c[3542] | 0;
   do if (!g) {
    g = a[14226] | 0;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     h = c[3549] | 0;
     c[3545] = h;
     c[3543] = h;
     g = h + (c[3550] | 0) | 0;
     c[3542] = g;
     I = 191;
     break;
    } else {
     c[3538] = g | 32;
     g = 0;
     I = 194;
     break;
    }
   } else {
    h = c[3543] | 0;
    I = 191;
   } while (0);
   do if ((I | 0) == 191) if ((g - h | 0) >>> 0 < j >>> 0) {
    g = Ba[c[14188 >> 2] & 7](14152, 15540, j) | 0;
    I = 194;
    break;
   } else {
    bc(h | 0, 15540, j | 0) | 0;
    c[3543] = (c[3543] | 0) + j;
    break;
   } while (0);
   if ((I | 0) == 194) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
    J = 1;
    i = K;
    return J | 0;
   }
   j = a[14227] | 0;
   if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
    g = c[3543] | 0;
    h = c[3542] | 0;
    if (g >>> 0 < h >>> 0) {
     c[3543] = g + 1;
     a[g >> 0] = 10;
     J = 1;
     i = K;
     return J | 0;
    }
   }
   a[J >> 0] = 10;
   do if (!h) {
    j = b[7113] | 0;
    g = (j & 65535) << 24 >> 24;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     k = c[3549] | 0;
     c[3545] = k;
     c[3543] = k;
     h = k + (c[3550] | 0) | 0;
     c[3542] = h;
     g = (j & 65535) >>> 8 & 255;
     I = 205;
     break;
    } else {
     c[3538] = g | 32;
     break;
    }
   } else {
    k = c[3543] | 0;
    g = j;
    I = 205;
   } while (0);
   do if ((I | 0) == 205) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = k + 1;
    a[k >> 0] = 10;
    break;
   } while (0);
   J = 1;
   i = K;
   return J | 0;
  }
  bc(n | 0, g | 0, B | 0) | 0;
  k = g + B | 0;
  g = a[k >> 0] | 0;
  if (g << 24 >> 24 == -17) {
   h = k + 1 | 0;
   g = a[h >> 0] | 0;
   if (g << 24 >> 24 == -69) {
    g = a[h + 1 >> 0] | 0;
    if (g << 24 >> 24 == -65) g = 0; else {
     h = 191;
     I = 211;
    }
   } else {
    h = 187;
    I = 211;
   }
  } else {
   h = 239;
   I = 211;
  }
  if ((I | 0) == 211) g = (g & 255) - h | 0;
  h = (g | 0) == 0 ? k + 3 | 0 : k;
  g = n + B | 0;
  m = k + o | 0;
  if (h >>> 0 < m >>> 0) do {
   n : do if ((h | 0) == (m | 0)) {
    h = m;
    k = 0;
    I = 236;
   } else {
    k = a[h >> 0] | 0;
    do if (!(k & 128)) h = h + 1 | 0; else {
     if ((k & 224 | 0) == 192) {
      k = k << 6 & 1984;
      l = h + 1 | 0;
      if (l >>> 0 < m >>> 0) k = d[l >> 0] & 63 | k;
      h = h + 2 | 0;
      h = h >>> 0 > m >>> 0 ? m : h;
      break;
     }
     if ((k & 240 | 0) == 224) {
      k = k << 12 & 126976;
      l = h + 1 | 0;
      if (l >>> 0 < m >>> 0) k = d[l >> 0] << 6 & 4032 | k;
      l = h + 2 | 0;
      if (l >>> 0 < m >>> 0) k = d[l >> 0] & 63 | k;
      h = h + 3 | 0;
      h = h >>> 0 > m >>> 0 ? m : h;
      break;
     }
     if ((k & 496 | 0) != 240) {
      h = h + 1 | 0;
      k = 0;
      I = 236;
      break n;
     }
     k = k << 18 & 8126464;
     l = h + 1 | 0;
     if (l >>> 0 < m >>> 0) k = d[l >> 0] << 12 & 258048 | k;
     l = h + 2 | 0;
     if (l >>> 0 < m >>> 0) k = d[l >> 0] << 6 & 4032 | k;
     l = h + 3 | 0;
     if (l >>> 0 < m >>> 0) k = d[l >> 0] & 63 | k;
     h = h + 4 | 0;
     h = h >>> 0 > m >>> 0 ? m : h;
    } while (0);
    if (k >>> 0 < 128) I = 236; else {
     if (k >>> 0 < 2048) {
      a[g >> 0] = k >>> 8;
      a[g + 1 >> 0] = k;
      g = g + 2 | 0;
      break;
     }
     l = g + 1 | 0;
     if (k >>> 0 < 65536) {
      a[g >> 0] = -128;
      a[l >> 0] = k >>> 8;
      a[g + 2 >> 0] = k;
      g = g + 3 | 0;
      break;
     } else {
      a[g >> 0] = 8;
      a[l >> 0] = k >>> 16;
      a[g + 2 >> 0] = k >>> 8;
      a[g + 3 >> 0] = k;
      g = g + 4 | 0;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 236) {
    I = 0;
    a[g >> 0] = k;
    g = g + 1 | 0;
   }
  } while (h >>> 0 < m >>> 0);
  g = g - n + z | 0;
  s = Sb(n, g) | 0;
  if (!s) {
   Rb(n);
   o : do if (!1) {
    g = 15569;
    I = 247;
   } else {
    g = 15569;
    h = 15569;
    while (1) {
     if (!(a[g >> 0] | 0)) {
      g = h;
      break o;
     }
     g = g + 1 | 0;
     h = g;
     if (!(h & 3)) {
      I = 247;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 247) {
    while (1) {
     h = c[g >> 2] | 0;
     if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
    }
    if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   j = g - 15569 | 0;
   g = c[3542] | 0;
   do if (!g) {
    g = a[14226] | 0;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     h = c[3549] | 0;
     c[3545] = h;
     c[3543] = h;
     g = h + (c[3550] | 0) | 0;
     c[3542] = g;
     I = 257;
     break;
    } else {
     c[3538] = g | 32;
     g = 0;
     I = 260;
     break;
    }
   } else {
    h = c[3543] | 0;
    I = 257;
   } while (0);
   do if ((I | 0) == 257) if ((g - h | 0) >>> 0 < j >>> 0) {
    g = Ba[c[14188 >> 2] & 7](14152, 15569, j) | 0;
    I = 260;
    break;
   } else {
    bc(h | 0, 15569, j | 0) | 0;
    c[3543] = (c[3543] | 0) + j;
    break;
   } while (0);
   if ((I | 0) == 260) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
    J = 1;
    i = K;
    return J | 0;
   }
   j = a[14227] | 0;
   if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
    g = c[3543] | 0;
    h = c[3542] | 0;
    if (g >>> 0 < h >>> 0) {
     c[3543] = g + 1;
     a[g >> 0] = 10;
     J = 1;
     i = K;
     return J | 0;
    }
   }
   a[J >> 0] = 10;
   do if (!h) {
    j = b[7113] | 0;
    g = (j & 65535) << 24 >> 24;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     k = c[3549] | 0;
     c[3545] = k;
     c[3543] = k;
     h = k + (c[3550] | 0) | 0;
     c[3542] = h;
     g = (j & 65535) >>> 8 & 255;
     I = 271;
     break;
    } else {
     c[3538] = g | 32;
     break;
    }
   } else {
    k = c[3543] | 0;
    g = j;
    I = 271;
   } while (0);
   do if ((I | 0) == 271) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = k + 1;
    a[k >> 0] = 10;
    break;
   } while (0);
   J = 1;
   i = K;
   return J | 0;
  }
  if (!j) {
   j = s + B | 0;
   k = j + o | 0;
   if ((o | 0) > 0) {
    h = 0;
    do {
     switch (a[j >> 0] | 0) {
     case 38:
      {
       h = h + 4 | 0;
       break;
      }
     case 60:
      {
       h = h + 3 | 0;
       break;
      }
     default:
      {}
     }
     j = j + 1 | 0;
    } while (j >>> 0 < k >>> 0);
    p : do if (!h) h = s; else {
     g = g + h | 0;
     h = Sb(s, g) | 0;
     if (h | 0) {
      k = h + B | 0;
      l = k + o | 0;
      j = 0;
      m = l;
      while (1) {
       switch (a[k >> 0] | 0) {
       case 38:
        {
         z = k + 1 | 0;
         cc(k + 5 | 0, z | 0, m + ~k | 0) | 0;
         a[k >> 0] = a[15643] | 0;
         a[k + 1 >> 0] = a[15644] | 0;
         a[k + 2 >> 0] = a[15645] | 0;
         a[k + 3 >> 0] = a[15646] | 0;
         a[k + 4 >> 0] = a[15647] | 0;
         j = j + 4 | 0;
         k = z;
         break;
        }
       case 60:
        {
         z = k + 1 | 0;
         cc(k + 4 | 0, z | 0, m + ~k | 0) | 0;
         a[k >> 0] = 38;
         a[k + 1 >> 0] = 108;
         a[k + 2 >> 0] = 116;
         a[k + 3 >> 0] = 59;
         j = j + 3 | 0;
         k = z;
         break;
        }
       default:
        k = k + 1 | 0;
       }
       m = l + j | 0;
       if (k >>> 0 >= m >>> 0) break p;
      }
     }
     q : do if (!3) {
      g = 15599;
      I = 475;
     } else {
      g = 15599;
      h = 15599;
      while (1) {
       if (!(a[g >> 0] | 0)) {
        g = h;
        break q;
       }
       g = g + 1 | 0;
       h = g;
       if (!(h & 3)) {
        I = 475;
        break;
       }
      }
     } while (0);
     if ((I | 0) == 475) {
      while (1) {
       h = c[g >> 2] | 0;
       if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
      }
      if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
     }
     j = g - 15599 | 0;
     g = c[3542] | 0;
     do if (!g) {
      g = a[14226] | 0;
      a[14226] = g + 255 | g;
      g = c[3538] | 0;
      if (!(g & 8)) {
       c[3540] = 0;
       c[3539] = 0;
       h = c[3549] | 0;
       c[3545] = h;
       c[3543] = h;
       g = h + (c[3550] | 0) | 0;
       c[3542] = g;
       I = 485;
       break;
      } else {
       c[3538] = g | 32;
       g = 0;
       I = 488;
       break;
      }
     } else {
      h = c[3543] | 0;
      I = 485;
     } while (0);
     do if ((I | 0) == 485) if ((g - h | 0) >>> 0 < j >>> 0) {
      g = Ba[c[14188 >> 2] & 7](14152, 15599, j) | 0;
      I = 488;
      break;
     } else {
      bc(h | 0, 15599, j | 0) | 0;
      c[3543] = (c[3543] | 0) + j;
      I = 490;
      break;
     } while (0);
     do if ((I | 0) == 488) {
      if ((g | 0) == (j | 0)) {
       I = 490;
       break;
      }
      if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) >= 0) I = 490;
     } while (0);
     r : do if ((I | 0) == 490) {
      j = a[14227] | 0;
      do if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
       g = c[3543] | 0;
       h = c[3542] | 0;
       if (g >>> 0 >= h >>> 0) break;
       c[3543] = g + 1;
       a[g >> 0] = 10;
       break r;
      } while (0);
      a[J >> 0] = 10;
      do if (!h) {
       j = b[7113] | 0;
       g = (j & 65535) << 24 >> 24;
       a[14226] = g + 255 | g;
       g = c[3538] | 0;
       if (!(g & 8)) {
        c[3540] = 0;
        c[3539] = 0;
        k = c[3549] | 0;
        c[3545] = k;
        c[3543] = k;
        h = k + (c[3550] | 0) | 0;
        c[3542] = h;
        g = (j & 65535) >>> 8 & 255;
        I = 499;
        break;
       } else {
        c[3538] = g | 32;
        break;
       }
      } else {
       k = c[3543] | 0;
       g = j;
       I = 499;
      } while (0);
      do if ((I | 0) == 499) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
       Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
       break;
      } else {
       c[3543] = k + 1;
       a[k >> 0] = 10;
       break;
      } while (0);
     } while (0);
     Rb(s);
     J = 1;
     i = K;
     return J | 0;
    } while (0);
    if (!h) {
     J = 1;
     i = K;
     return J | 0;
    }
   } else h = s;
   l = h + B + (g + (A ? -280 : 0)) | 0;
   n = l;
   a[n >> 0] = 14;
   a[n + 1 >> 0] = 8;
   a[n + 2 >> 0] = 14;
   a[n + 3 >> 0] = 5;
   l = l + 4 | 0;
   a[l >> 0] = 14;
   a[l + 1 >> 0] = 2;
   a[l + 2 >> 0] = 14;
   a[l + 3 >> 0] = 0;
   l = g;
   n = h;
   break;
  }
  k = o + B | 0;
  g = Qb(k) | 0;
  if (!g) {
   s : do if (!1) {
    g = 15649;
    I = 281;
   } else {
    g = 15649;
    h = 15649;
    while (1) {
     if (!(a[g >> 0] | 0)) {
      g = h;
      break s;
     }
     g = g + 1 | 0;
     h = g;
     if (!(h & 3)) {
      I = 281;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 281) {
    while (1) {
     h = c[g >> 2] | 0;
     if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
    }
    if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   j = g - 15649 | 0;
   g = c[3542] | 0;
   do if (!g) {
    g = a[14226] | 0;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     h = c[3549] | 0;
     c[3545] = h;
     c[3543] = h;
     g = h + (c[3550] | 0) | 0;
     c[3542] = g;
     I = 291;
     break;
    } else {
     c[3538] = g | 32;
     g = 0;
     I = 294;
     break;
    }
   } else {
    h = c[3543] | 0;
    I = 291;
   } while (0);
   do if ((I | 0) == 291) if ((g - h | 0) >>> 0 < j >>> 0) {
    g = Ba[c[14188 >> 2] & 7](14152, 15649, j) | 0;
    I = 294;
    break;
   } else {
    bc(h | 0, 15649, j | 0) | 0;
    c[3543] = (c[3543] | 0) + j;
    break;
   } while (0);
   if ((I | 0) == 294) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
    J = 1;
    i = K;
    return J | 0;
   }
   j = a[14227] | 0;
   if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
    g = c[3543] | 0;
    h = c[3542] | 0;
    if (g >>> 0 < h >>> 0) {
     c[3543] = g + 1;
     a[g >> 0] = 10;
     J = 1;
     i = K;
     return J | 0;
    }
   }
   a[J >> 0] = 10;
   do if (!h) {
    j = b[7113] | 0;
    g = (j & 65535) << 24 >> 24;
    a[14226] = g + 255 | g;
    g = c[3538] | 0;
    if (!(g & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     k = c[3549] | 0;
     c[3545] = k;
     c[3543] = k;
     h = k + (c[3550] | 0) | 0;
     c[3542] = h;
     g = (j & 65535) >>> 8 & 255;
     I = 305;
     break;
    } else {
     c[3538] = g | 32;
     break;
    }
   } else {
    k = c[3543] | 0;
    g = j;
    I = 305;
   } while (0);
   do if ((I | 0) == 305) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = k + 1;
    a[k >> 0] = 10;
    break;
   } while (0);
   J = 1;
   i = K;
   return J | 0;
  }
  bc(g | 0, s | 0, B | 0) | 0;
  h = s + o + B + -5 | 0;
  t : do if (h >>> 0 > s >>> 0) {
   r = s;
   u : while (1) {
    j = r + 1 | 0;
    v : do if ((a[r >> 0] | 0) == 60) {
     switch (a[j >> 0] | 0) {
     case 112:
      break;
     case 100:
      {
       if ((a[r + 2 >> 0] | 0) != 111) break v;
       if ((a[r + 3 >> 0] | 0) == 99) break u; else break v;
      }
     default:
      break v;
     }
     if ((a[r + 2 >> 0] | 0) == 114) {
      if ((a[r + 3 >> 0] | 0) != 111) break;
      if ((a[r + 4 >> 0] | 0) == 98) break u;
     }
    } while (0);
    if (j >>> 0 < h >>> 0) r = j; else {
     I = 313;
     break t;
    }
   }
   o = s - r + k | 0;
   p = g + B | 0;
   q = o + -1 | 0;
   n = 0;
   m = 0;
   h = 0;
   j = 0;
   k = 60;
   w : while (1) {
    l = r + h | 0;
    do if (k << 24 >> 24 == 60) {
     k = h + 1 | 0;
     if (k >>> 0 >= o >>> 0) {
      I = 348;
      break w;
     }
     if ((a[r + k >> 0] | 0) != 47) {
      if (m >>> 0 > 399) {
       I = 385;
       break w;
      }
      c[C + (m << 2) >> 2] = n;
      a[p + j >> 0] = a[l >> 0] | 0;
      n = n + 1 | 0;
      m = m + 1 | 0;
      break;
     }
     if (!m) {
      I = 348;
      break w;
     }
     l = j + 1 | 0;
     a[p + j >> 0] = 14;
     j = m + -1 | 0;
     a[p + l >> 0] = c[C + (j << 2) >> 2];
     h = k;
     while (1) {
      h = h + 1 | 0;
      if (h >>> 0 > q >>> 0) {
       I = 348;
       break w;
      }
      if ((a[r + h >> 0] | 0) == 62) {
       m = j;
       j = l;
       break;
      }
     }
    } else a[p + j >> 0] = k; while (0);
    j = j + 1 | 0;
    k = h + 1 | 0;
    if (k >>> 0 > q >>> 0) {
     I = 420;
     break;
    }
    h = k;
    k = a[r + k >> 0] | 0;
   }
   x : do if ((I | 0) == 348) {
    y : do if (!1) {
     h = 15721;
     I = 351;
    } else {
     h = 15721;
     j = 15721;
     while (1) {
      if (!(a[h >> 0] | 0)) {
       h = j;
       break y;
      }
      h = h + 1 | 0;
      j = h;
      if (!(j & 3)) {
       I = 351;
       break;
      }
     }
    } while (0);
    if ((I | 0) == 351) {
     while (1) {
      j = c[h >> 2] | 0;
      if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
     }
     if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
    }
    k = h - 15721 | 0;
    h = c[3542] | 0;
    do if (!h) {
     h = a[14226] | 0;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      j = c[3549] | 0;
      c[3545] = j;
      c[3543] = j;
      h = j + (c[3550] | 0) | 0;
      c[3542] = h;
      I = 361;
      break;
     } else {
      c[3538] = h | 32;
      h = 0;
      I = 364;
      break;
     }
    } else {
     j = c[3543] | 0;
     I = 361;
    } while (0);
    do if ((I | 0) == 361) if ((h - j | 0) >>> 0 < k >>> 0) {
     h = Ba[c[14188 >> 2] & 7](14152, 15721, k) | 0;
     I = 364;
     break;
    } else {
     bc(j | 0, 15721, k | 0) | 0;
     c[3543] = (c[3543] | 0) + k;
     break;
    } while (0);
    do if ((I | 0) == 364) {
     if ((h | 0) == (k | 0)) break;
     if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) break x;
    } while (0);
    j = a[14227] | 0;
    do if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
     k = c[3543] | 0;
     h = c[3542] | 0;
     if (k >>> 0 >= h >>> 0) break;
     c[3543] = k + 1;
     a[k >> 0] = 10;
     break x;
    } while (0);
    a[J >> 0] = 10;
    do if (!h) {
     j = b[7113] | 0;
     h = (j & 65535) << 24 >> 24;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      k = c[3549] | 0;
      c[3545] = k;
      c[3543] = k;
      h = k + (c[3550] | 0) | 0;
      c[3542] = h;
      j = (j & 65535) >>> 8 & 255;
      I = 375;
      break;
     } else {
      c[3538] = h | 32;
      break;
     }
    } else {
     k = c[3543] | 0;
     I = 375;
    } while (0);
    do if ((I | 0) == 375) if (k >>> 0 >= h >>> 0 | j << 24 >> 24 == 10) {
     Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
     break;
    } else {
     c[3543] = k + 1;
     a[k >> 0] = 10;
     break;
    } while (0);
   } else if ((I | 0) == 385) {
    z : do if (!0) {
     h = 15772;
     I = 388;
    } else {
     h = 15772;
     j = 15772;
     while (1) {
      if (!(a[h >> 0] | 0)) {
       h = j;
       break z;
      }
      h = h + 1 | 0;
      j = h;
      if (!(j & 3)) {
       I = 388;
       break;
      }
     }
    } while (0);
    if ((I | 0) == 388) {
     while (1) {
      j = c[h >> 2] | 0;
      if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
     }
     if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
    }
    k = h - 15772 | 0;
    h = c[3542] | 0;
    do if (!h) {
     h = a[14226] | 0;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      j = c[3549] | 0;
      c[3545] = j;
      c[3543] = j;
      h = j + (c[3550] | 0) | 0;
      c[3542] = h;
      I = 398;
      break;
     } else {
      c[3538] = h | 32;
      h = 0;
      I = 401;
      break;
     }
    } else {
     j = c[3543] | 0;
     I = 398;
    } while (0);
    do if ((I | 0) == 398) if ((h - j | 0) >>> 0 < k >>> 0) {
     h = Ba[c[14188 >> 2] & 7](14152, 15772, k) | 0;
     I = 401;
     break;
    } else {
     bc(j | 0, 15772, k | 0) | 0;
     c[3543] = (c[3543] | 0) + k;
     break;
    } while (0);
    do if ((I | 0) == 401) {
     if ((h | 0) == (k | 0)) break;
     if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) break x;
    } while (0);
    k = a[14227] | 0;
    do if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
     h = c[3543] | 0;
     j = c[3542] | 0;
     if (h >>> 0 >= j >>> 0) break;
     c[3543] = h + 1;
     a[h >> 0] = 10;
     break x;
    } while (0);
    a[J >> 0] = 10;
    do if (!j) {
     k = b[7113] | 0;
     h = (k & 65535) << 24 >> 24;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      l = c[3549] | 0;
      c[3545] = l;
      c[3543] = l;
      j = l + (c[3550] | 0) | 0;
      c[3542] = j;
      h = (k & 65535) >>> 8 & 255;
      I = 412;
      break;
     } else {
      c[3538] = h | 32;
      break;
     }
    } else {
     l = c[3543] | 0;
     h = k;
     I = 412;
    } while (0);
    do if ((I | 0) == 412) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
     Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
     break;
    } else {
     c[3543] = l + 1;
     a[l >> 0] = 10;
     break;
    } while (0);
   } else if ((I | 0) == 420) {
    h = j + B | 0;
    g = Sb(g, h) | 0;
    if (g | 0) {
     Rb(s);
     l = h;
     n = g;
     break l;
    }
    A : do if (!0) {
     g = 15808;
     I = 424;
    } else {
     g = 15808;
     h = 15808;
     while (1) {
      if (!(a[g >> 0] | 0)) {
       g = h;
       break A;
      }
      g = g + 1 | 0;
      h = g;
      if (!(h & 3)) {
       I = 424;
       break;
      }
     }
    } while (0);
    if ((I | 0) == 424) {
     while (1) {
      h = c[g >> 2] | 0;
      if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
     }
     if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
    }
    j = g - 15808 | 0;
    g = c[3542] | 0;
    do if (!g) {
     g = a[14226] | 0;
     a[14226] = g + 255 | g;
     g = c[3538] | 0;
     if (!(g & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      h = c[3549] | 0;
      c[3545] = h;
      c[3543] = h;
      g = h + (c[3550] | 0) | 0;
      c[3542] = g;
      I = 434;
      break;
     } else {
      c[3538] = g | 32;
      g = 0;
      I = 437;
      break;
     }
    } else {
     h = c[3543] | 0;
     I = 434;
    } while (0);
    do if ((I | 0) == 434) if ((g - h | 0) >>> 0 < j >>> 0) {
     g = Ba[c[14188 >> 2] & 7](14152, 15808, j) | 0;
     I = 437;
     break;
    } else {
     bc(h | 0, 15808, j | 0) | 0;
     c[3543] = (c[3543] | 0) + j;
     break;
    } while (0);
    do if ((I | 0) == 437) {
     if ((g | 0) == (j | 0)) break;
     if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) {
      g = 0;
      break x;
     }
    } while (0);
    j = a[14227] | 0;
    do if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
     g = c[3543] | 0;
     h = c[3542] | 0;
     if (g >>> 0 >= h >>> 0) break;
     c[3543] = g + 1;
     a[g >> 0] = 10;
     g = 0;
     break x;
    } while (0);
    a[J >> 0] = 10;
    do if (!h) {
     j = b[7113] | 0;
     g = (j & 65535) << 24 >> 24;
     a[14226] = g + 255 | g;
     g = c[3538] | 0;
     if (!(g & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      k = c[3549] | 0;
      c[3545] = k;
      c[3543] = k;
      h = k + (c[3550] | 0) | 0;
      c[3542] = h;
      g = (j & 65535) >>> 8 & 255;
      I = 448;
      break;
     } else {
      c[3538] = g | 32;
      break;
     }
    } else {
     k = c[3543] | 0;
     g = j;
     I = 448;
    } while (0);
    do if ((I | 0) == 448) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
     Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
     break;
    } else {
     c[3543] = k + 1;
     a[k >> 0] = 10;
     break;
    } while (0);
    g = 0;
   } while (0);
  } else I = 313; while (0);
  B : do if ((I | 0) == 313) {
   C : do if (!3) {
    h = 15679;
    I = 316;
   } else {
    h = 15679;
    j = 15679;
    while (1) {
     if (!(a[h >> 0] | 0)) {
      h = j;
      break C;
     }
     h = h + 1 | 0;
     j = h;
     if (!(j & 3)) {
      I = 316;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 316) {
    while (1) {
     j = c[h >> 2] | 0;
     if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
    }
    if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
   }
   k = h - 15679 | 0;
   h = c[3542] | 0;
   do if (!h) {
    h = a[14226] | 0;
    a[14226] = h + 255 | h;
    h = c[3538] | 0;
    if (!(h & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     j = c[3549] | 0;
     c[3545] = j;
     c[3543] = j;
     h = j + (c[3550] | 0) | 0;
     c[3542] = h;
     I = 326;
     break;
    } else {
     c[3538] = h | 32;
     h = 0;
     I = 329;
     break;
    }
   } else {
    j = c[3543] | 0;
    I = 326;
   } while (0);
   do if ((I | 0) == 326) if ((h - j | 0) >>> 0 < k >>> 0) {
    h = Ba[c[14188 >> 2] & 7](14152, 15679, k) | 0;
    I = 329;
    break;
   } else {
    bc(j | 0, 15679, k | 0) | 0;
    c[3543] = (c[3543] | 0) + k;
    break;
   } while (0);
   if ((I | 0) == 329) if ((h | 0) != (k | 0)) if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) break;
   k = a[14227] | 0;
   do if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
    h = c[3543] | 0;
    j = c[3542] | 0;
    if (h >>> 0 >= j >>> 0) break;
    c[3543] = h + 1;
    a[h >> 0] = 10;
    break B;
   } while (0);
   a[J >> 0] = 10;
   do if (!j) {
    k = b[7113] | 0;
    h = (k & 65535) << 24 >> 24;
    a[14226] = h + 255 | h;
    h = c[3538] | 0;
    if (!(h & 8)) {
     c[3540] = 0;
     c[3539] = 0;
     l = c[3549] | 0;
     c[3545] = l;
     c[3543] = l;
     j = l + (c[3550] | 0) | 0;
     c[3542] = j;
     h = (k & 65535) >>> 8 & 255;
     I = 340;
     break;
    } else {
     c[3538] = h | 32;
     break;
    }
   } else {
    l = c[3543] | 0;
    h = k;
    I = 340;
   } while (0);
   do if ((I | 0) == 340) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
    Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
    break;
   } else {
    c[3543] = l + 1;
    a[l >> 0] = 10;
    break;
   } while (0);
  } while (0);
  Rb(g);
  J = 1;
  i = K;
  return J | 0;
 } else {
  l = h;
  n = g;
 } while (0);
 L = +(l >>> 0);
 k = ~~(L + L * .1 + 12.0) >>> 0;
 x = Qb(k + 40 | 0) | 0;
 do if (!x) {
  D : do if (!3) {
   g = 16771;
   I = 522;
  } else {
   g = 16771;
   h = 16771;
   while (1) {
    if (!(a[g >> 0] | 0)) {
     g = h;
     break D;
    }
    g = g + 1 | 0;
    h = g;
    if (!(h & 3)) {
     I = 522;
     break;
    }
   }
  } while (0);
  if ((I | 0) == 522) {
   while (1) {
    h = c[g >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
  }
  j = g - 16771 | 0;
  g = c[3542] | 0;
  do if (!g) {
   g = a[14226] | 0;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    I = 532;
    break;
   } else {
    c[3538] = g | 32;
    g = 0;
    I = 535;
    break;
   }
  } else {
   h = c[3543] | 0;
   I = 532;
  } while (0);
  do if ((I | 0) == 532) if ((g - h | 0) >>> 0 < j >>> 0) {
   g = Ba[c[14188 >> 2] & 7](14152, 16771, j) | 0;
   I = 535;
   break;
  } else {
   bc(h | 0, 16771, j | 0) | 0;
   c[3543] = (c[3543] | 0) + j;
   break;
  } while (0);
  if ((I | 0) == 535) if ((g | 0) != (j | 0)) if ((((g >>> 0) / (j >>> 0) | 0) + -1 | 0) < 0) break;
  j = a[14227] | 0;
  if (j << 24 >> 24 == 10) h = c[3542] | 0; else {
   g = c[3543] | 0;
   h = c[3542] | 0;
   if (g >>> 0 < h >>> 0) {
    c[3543] = g + 1;
    a[g >> 0] = 10;
    break;
   }
  }
  a[J >> 0] = 10;
  do if (!h) {
   j = b[7113] | 0;
   g = (j & 65535) << 24 >> 24;
   a[14226] = g + 255 | g;
   g = c[3538] | 0;
   if (!(g & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    k = c[3549] | 0;
    c[3545] = k;
    c[3543] = k;
    h = k + (c[3550] | 0) | 0;
    c[3542] = h;
    g = (j & 65535) >>> 8 & 255;
    I = 546;
    break;
   } else {
    c[3538] = g | 32;
    break;
   }
  } else {
   k = c[3543] | 0;
   g = j;
   I = 546;
  } while (0);
  do if ((I | 0) == 546) if (k >>> 0 >= h >>> 0 | g << 24 >> 24 == 10) {
   Ba[c[14188 >> 2] & 7](14152, J, 1) | 0;
   break;
  } else {
   c[3543] = k + 1;
   a[k >> 0] = 10;
   break;
  } while (0);
 } else {
  E : do if (G) {
   g = e;
   I = 554;
  } else {
   h = e;
   g = H;
   while (1) {
    if (!(a[h >> 0] | 0)) break E;
    h = h + 1 | 0;
    g = h;
    if (!(g & 3)) {
     g = h;
     I = 554;
     break;
    }
   }
  } while (0);
  if ((I | 0) == 554) {
   while (1) {
    h = c[g >> 2] | 0;
    if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
   }
   if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
  }
  g = g - H | 0;
  if (g >>> 0 > 4) {
   h = e + g + -4 | 0;
   g = a[h >> 0] | 0;
   j = g & 255;
   switch (g << 24 >> 24) {
   case 0:
    {
     h = 46;
     g = 0;
     break;
    }
   case 46:
    {
     I = 562;
     break;
    }
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) == 46) I = 562; else h = 46;
   }
   F : do if ((I | 0) == 562) {
    h = h + 1 | 0;
    g = a[h >> 0] | 0;
    j = g & 255;
    switch (g << 24 >> 24) {
    case 0:
     {
      h = 98;
      g = 0;
      break F;
     }
    case 98:
     break;
    default:
     if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 98) {
      h = 98;
      break F;
     }
    }
    h = h + 1 | 0;
    g = a[h >> 0] | 0;
    j = g & 255;
    switch (g << 24 >> 24) {
    case 0:
     {
      h = 109;
      g = 0;
      break F;
     }
    case 109:
     break;
    default:
     if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 109) {
      h = 109;
      break F;
     }
    }
    j = h + 1 | 0;
    g = a[j >> 0] | 0;
    h = g & 255;
    switch (g << 24 >> 24) {
    case 0:
     {
      h = 112;
      g = 0;
      break F;
     }
    case 112:
     break;
    default:
     if ((((h + -65 | 0) >>> 0 < 26 ? h | 32 : h) | 0) != 112) {
      h = 112;
      break F;
     }
    }
    h = 0;
    g = a[j + 1 >> 0] | 0;
   } while (0);
   B = g & 255;
   if ((((h + -65 | 0) >>> 0 < 26 ? h | 32 : h) | 0) == (((B + -65 | 0) >>> 0 < 26 ? B | 32 : B) | 0)) {
    G : do if (G) {
     g = e;
     I = 601;
    } else {
     h = e;
     g = H;
     while (1) {
      if (!(a[h >> 0] | 0)) break G;
      h = h + 1 | 0;
      g = h;
      if (!(g & 3)) {
       g = h;
       I = 601;
       break;
      }
     }
    } while (0);
    if ((I | 0) == 601) {
     while (1) {
      h = c[g >> 2] | 0;
      if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
     }
     if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
    }
    h = 1 - H + g | 0;
    do {
     if (!h) {
      g = 0;
      break;
     }
     h = h + -1 | 0;
     g = e + h | 0;
    } while ((a[g >> 0] | 0) != 47);
    if (Pa(g | 0 ? g + 1 | 0 : e, n, l, f) | 0) break;
   } else I = 564;
  } else I = 564;
  if ((I | 0) == 564) {
   m = x + 40 | 0;
   c[J >> 2] = n;
   c[J + 12 >> 2] = m;
   c[J + 4 >> 2] = l;
   c[J + 16 >> 2] = k;
   c[J + 32 >> 2] = 0;
   j = J + 36 | 0;
   c[j >> 2] = 0;
   if (cb(J, -1) | 0) {
    Pb(16362);
    ua(1);
   }
   if ((ib(J, 4) | 0) != 1) {
    Pb(16381);
    ua(1);
   }
   k = J + 28 | 0;
   g = c[k >> 2] | 0;
   if (!g) {
    Pb(16395);
    ua(1);
   }
   l = c[g + 4 >> 2] | 0;
   switch (l | 0) {
   case 42:
   case 69:
   case 73:
   case 91:
   case 103:
   case 113:
   case 666:
    break;
   default:
    {
     Pb(16395);
     ua(1);
    }
   }
   h = c[g + 8 >> 2] | 0;
   if (h) {
    Da[c[j >> 2] & 1](c[J + 40 >> 2] | 0, h);
    g = c[k >> 2] | 0;
   }
   h = c[g + 68 >> 2] | 0;
   if (h) {
    Da[c[j >> 2] & 1](c[J + 40 >> 2] | 0, h);
    g = c[k >> 2] | 0;
   }
   h = c[g + 64 >> 2] | 0;
   if (h) {
    Da[c[j >> 2] & 1](c[J + 40 >> 2] | 0, h);
    g = c[k >> 2] | 0;
   }
   h = c[g + 56 >> 2] | 0;
   if (!h) h = J + 40 | 0; else {
    g = J + 40 | 0;
    Da[c[j >> 2] & 1](c[g >> 2] | 0, h);
    h = g;
    g = c[k >> 2] | 0;
   }
   Da[c[j >> 2] & 1](c[h >> 2] | 0, g);
   c[k >> 2] = 0;
   if ((l | 0) == 113) {
    Pb(16395);
    ua(1);
   }
   w = c[J + 20 >> 2] | 0;
   Rb(n);
   $a(16179, C);
   $a(16187, D);
   $a(16195, E);
   o = F + 4 | 0;
   p = F + 5 | 0;
   q = F + 6 | 0;
   r = F + 7 | 0;
   s = F + 1 | 0;
   t = F + 2 | 0;
   u = F + 3 | 0;
   v = J + 4 | 0;
   g = m;
   m = 0;
   n = w;
   do {
    h = m + 1 | 0;
    B = m + 1877086983 | 0;
    m = (h | 0) == 1024 ? 0 : h;
    h = B >>> 4 & 252645135;
    B = h << 4 ^ B;
    l = B & 65535 ^ h >>> 16;
    B = l ^ B;
    h = l << 16 ^ h;
    l = (B >>> 2 ^ h) & 858993459;
    h = l ^ h;
    B = l << 2 ^ B;
    l = (h >>> 8 ^ B) & 16711935;
    B = l ^ B;
    h = l << 8 ^ h;
    l = (B >>> 1 ^ h) & 1431655765;
    c[J >> 2] = l ^ h;
    c[v >> 2] = l << 1 ^ B;
    ab(J, C, 1);
    ab(J, D, 0);
    ab(J, E, 1);
    B = c[J >> 2] | 0;
    l = c[v >> 2] | 0;
    h = (l >>> 1 ^ B) & 1431655765;
    B = h ^ B;
    l = h << 1 ^ l;
    h = (B >>> 8 ^ l) & 16711935;
    l = h ^ l;
    B = h << 8 ^ B;
    h = (l >>> 2 ^ B) & 858993459;
    B = h ^ B;
    l = h << 2 ^ l;
    h = l & 65535 ^ B >>> 16;
    l = h ^ l;
    B = h << 16 ^ B;
    h = (l >>> 4 ^ B) & 252645135;
    B = h ^ B;
    l = h << 4 ^ l;
    h = B & 255;
    a[F >> 0] = h;
    a[s >> 0] = B >>> 8;
    a[t >> 0] = B >>> 16;
    a[u >> 0] = B >>> 24;
    a[o >> 0] = l;
    a[p >> 0] = l >>> 8;
    a[q >> 0] = l >>> 16;
    a[r >> 0] = l >>> 24;
    l = n >>> 0 < 8 ? n : 8;
    do if (l) {
     j = g + 1 | 0;
     a[g >> 0] = a[g >> 0] ^ h;
     if ((l | 0) == 1) {
      g = j;
      break;
     } else {
      k = 1;
      h = j;
     }
     while (1) {
      g = h + 1 | 0;
      a[h >> 0] = a[h >> 0] ^ a[F + k >> 0];
      k = k + 1 | 0;
      if (k >>> 0 >= l >>> 0) break; else h = g;
     }
    } while (0);
    n = n + -8 | 0;
   } while ((n | 0) > 0);
   g = x;
   h = 16730;
   j = g + 40 | 0;
   do {
    a[g >> 0] = a[h >> 0] | 0;
    g = g + 1 | 0;
    h = h + 1 | 0;
   } while ((g | 0) < (j | 0));
   H : do if (G) {
    g = e;
    I = 589;
   } else {
    g = e;
    h = H;
    while (1) {
     if (!(a[g >> 0] | 0)) {
      g = h;
      break H;
     }
     g = g + 1 | 0;
     h = g;
     if (!(h & 3)) {
      I = 589;
      break;
     }
    }
   } while (0);
   if ((I | 0) == 589) {
    while (1) {
     h = c[g >> 2] | 0;
     if (!((h & -2139062144 ^ -2139062144) & h + -16843009)) g = g + 4 | 0; else break;
    }
    if ((h & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   h = 1 - H + g | 0;
   do {
    if (!h) {
     g = 0;
     break;
    }
    h = h + -1 | 0;
    g = e + h | 0;
   } while ((a[g >> 0] | 0) != 47);
   if (Pa(g | 0 ? g + 1 | 0 : e, x, w + 40 | 0, f) | 0) break;
  }
  Rb(x);
  J = 0;
  i = K;
  return J | 0;
 } while (0);
 Rb(x);
 J = 1;
 i = K;
 return J | 0;
}
function ib(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0;
 if (!f) {
  I = -2;
  return I | 0;
 }
 F = f + 28 | 0;
 G = c[F >> 2] | 0;
 if (g >>> 0 > 5 | (G | 0) == 0) {
  I = -2;
  return I | 0;
 }
 I = f + 12 | 0;
 do if (c[I >> 2] | 0) {
  if (!(c[f >> 2] | 0)) if (c[f + 4 >> 2] | 0) break;
  C = G + 4 | 0;
  h = c[C >> 2] | 0;
  D = (g | 0) != 4;
  if (!(D & (h | 0) == 666)) {
   H = f + 16 | 0;
   if (!(c[H >> 2] | 0)) {
    c[f + 24 >> 2] = 18040;
    I = -5;
    return I | 0;
   }
   c[G >> 2] = f;
   E = G + 40 | 0;
   s = c[E >> 2] | 0;
   c[E >> 2] = g;
   do if ((h | 0) == 42) {
    if ((c[G + 24 >> 2] | 0) != 2) {
     i = (c[G + 48 >> 2] << 12) + -30720 | 0;
     if ((c[G + 136 >> 2] | 0) > 1) h = 0; else {
      h = c[G + 132 >> 2] | 0;
      if ((h | 0) < 2) h = 0; else if ((h | 0) < 6) h = 64; else h = (h | 0) == 6 ? 128 : 192;
     }
     A = h | i;
     B = G + 108 | 0;
     A = (c[B >> 2] | 0) == 0 ? A : A | 32;
     c[C >> 2] = 113;
     i = G + 20 | 0;
     h = c[i >> 2] | 0;
     c[i >> 2] = h + 1;
     j = G + 8 | 0;
     a[(c[j >> 2] | 0) + h >> 0] = A >>> 8;
     h = c[i >> 2] | 0;
     c[i >> 2] = h + 1;
     a[(c[j >> 2] | 0) + h >> 0] = ((A >>> 0) % 31 | 0 | A) ^ 31;
     h = f + 48 | 0;
     if (c[B >> 2] | 0) {
      B = c[h >> 2] | 0;
      A = c[i >> 2] | 0;
      c[i >> 2] = A + 1;
      a[(c[j >> 2] | 0) + A >> 0] = B >>> 24;
      A = c[i >> 2] | 0;
      c[i >> 2] = A + 1;
      a[(c[j >> 2] | 0) + A >> 0] = B >>> 16;
      A = c[h >> 2] | 0;
      B = c[i >> 2] | 0;
      c[i >> 2] = B + 1;
      a[(c[j >> 2] | 0) + B >> 0] = A >>> 8;
      B = c[i >> 2] | 0;
      c[i >> 2] = B + 1;
      a[(c[j >> 2] | 0) + B >> 0] = A;
     }
     c[h >> 2] = 1;
     h = c[C >> 2] | 0;
     A = 30;
     break;
    }
    j = f + 48 | 0;
    c[j >> 2] = 0;
    k = G + 20 | 0;
    h = c[k >> 2] | 0;
    c[k >> 2] = h + 1;
    l = G + 8 | 0;
    a[(c[l >> 2] | 0) + h >> 0] = 31;
    h = c[k >> 2] | 0;
    c[k >> 2] = h + 1;
    a[(c[l >> 2] | 0) + h >> 0] = -117;
    h = c[k >> 2] | 0;
    c[k >> 2] = h + 1;
    a[(c[l >> 2] | 0) + h >> 0] = 8;
    h = G + 28 | 0;
    i = c[h >> 2] | 0;
    if (!i) {
     h = c[k >> 2] | 0;
     c[k >> 2] = h + 1;
     a[(c[l >> 2] | 0) + h >> 0] = 0;
     h = c[k >> 2] | 0;
     c[k >> 2] = h + 1;
     a[(c[l >> 2] | 0) + h >> 0] = 0;
     h = c[k >> 2] | 0;
     c[k >> 2] = h + 1;
     a[(c[l >> 2] | 0) + h >> 0] = 0;
     h = c[k >> 2] | 0;
     c[k >> 2] = h + 1;
     a[(c[l >> 2] | 0) + h >> 0] = 0;
     h = c[k >> 2] | 0;
     c[k >> 2] = h + 1;
     a[(c[l >> 2] | 0) + h >> 0] = 0;
     h = c[G + 132 >> 2] | 0;
     if ((h | 0) == 9) h = 2; else h = ((h | 0) < 2 ? 1 : (c[G + 136 >> 2] | 0) > 1) ? 4 : 0;
     B = c[k >> 2] | 0;
     c[k >> 2] = B + 1;
     a[(c[l >> 2] | 0) + B >> 0] = h;
     B = c[k >> 2] | 0;
     c[k >> 2] = B + 1;
     a[(c[l >> 2] | 0) + B >> 0] = 3;
     c[C >> 2] = 113;
     break;
    }
    B = ((c[i + 44 >> 2] | 0 ? 2 : 0) | (c[i >> 2] | 0) != 0 | ((c[i + 16 >> 2] | 0) == 0 ? 0 : 4) | ((c[i + 28 >> 2] | 0) == 0 ? 0 : 8) | ((c[i + 36 >> 2] | 0) == 0 ? 0 : 16)) & 255;
    i = c[k >> 2] | 0;
    c[k >> 2] = i + 1;
    a[(c[l >> 2] | 0) + i >> 0] = B;
    i = c[(c[h >> 2] | 0) + 4 >> 2] & 255;
    B = c[k >> 2] | 0;
    c[k >> 2] = B + 1;
    a[(c[l >> 2] | 0) + B >> 0] = i;
    B = (c[(c[h >> 2] | 0) + 4 >> 2] | 0) >>> 8 & 255;
    i = c[k >> 2] | 0;
    c[k >> 2] = i + 1;
    a[(c[l >> 2] | 0) + i >> 0] = B;
    i = (c[(c[h >> 2] | 0) + 4 >> 2] | 0) >>> 16 & 255;
    B = c[k >> 2] | 0;
    c[k >> 2] = B + 1;
    a[(c[l >> 2] | 0) + B >> 0] = i;
    B = (c[(c[h >> 2] | 0) + 4 >> 2] | 0) >>> 24 & 255;
    i = c[k >> 2] | 0;
    c[k >> 2] = i + 1;
    a[(c[l >> 2] | 0) + i >> 0] = B;
    i = c[G + 132 >> 2] | 0;
    if ((i | 0) == 9) i = 2; else i = ((i | 0) < 2 ? 1 : (c[G + 136 >> 2] | 0) > 1) ? 4 : 0;
    B = c[k >> 2] | 0;
    c[k >> 2] = B + 1;
    a[(c[l >> 2] | 0) + B >> 0] = i;
    B = c[(c[h >> 2] | 0) + 12 >> 2] & 255;
    i = c[k >> 2] | 0;
    c[k >> 2] = i + 1;
    a[(c[l >> 2] | 0) + i >> 0] = B;
    i = c[h >> 2] | 0;
    if (c[i + 16 >> 2] | 0) {
     i = c[i + 20 >> 2] & 255;
     B = c[k >> 2] | 0;
     c[k >> 2] = B + 1;
     a[(c[l >> 2] | 0) + B >> 0] = i;
     B = (c[(c[h >> 2] | 0) + 20 >> 2] | 0) >>> 8 & 255;
     i = c[k >> 2] | 0;
     c[k >> 2] = i + 1;
     a[(c[l >> 2] | 0) + i >> 0] = B;
     i = c[h >> 2] | 0;
    }
    if (c[i + 44 >> 2] | 0) c[j >> 2] = bb(c[j >> 2] | 0, c[l >> 2] | 0, c[k >> 2] | 0) | 0;
    c[G + 32 >> 2] = 0;
    c[C >> 2] = 69;
    A = 32;
   } else A = 30; while (0);
   if ((A | 0) == 30) if ((h | 0) == 69) {
    i = G + 28 | 0;
    h = i;
    i = c[i >> 2] | 0;
    A = 32;
   } else A = 58;
   do if ((A | 0) == 32) {
    if (!(c[i + 16 >> 2] | 0)) {
     c[C >> 2] = 73;
     A = 60;
     break;
    }
    q = G + 20 | 0;
    l = c[q >> 2] | 0;
    r = G + 32 | 0;
    j = c[r >> 2] | 0;
    a : do if (j >>> 0 < (c[i + 20 >> 2] & 65535) >>> 0) {
     m = G + 12 | 0;
     n = f + 48 | 0;
     o = G + 8 | 0;
     p = f + 20 | 0;
     k = l;
     while (1) {
      if ((l | 0) == (c[m >> 2] | 0)) {
       if (l >>> 0 > k >>> 0 & (c[i + 44 >> 2] | 0) != 0) c[n >> 2] = bb(c[n >> 2] | 0, (c[o >> 2] | 0) + k | 0, l - k | 0) | 0;
       l = c[F >> 2] | 0;
       i = l + 5820 | 0;
       j = c[i >> 2] | 0;
       do if ((j | 0) == 16) {
        B = l + 5816 | 0;
        A = b[B >> 1] & 255;
        j = l + 20 | 0;
        y = c[j >> 2] | 0;
        c[j >> 2] = y + 1;
        z = l + 8 | 0;
        a[(c[z >> 2] | 0) + y >> 0] = A;
        y = (e[B >> 1] | 0) >>> 8 & 255;
        A = c[j >> 2] | 0;
        c[j >> 2] = A + 1;
        a[(c[z >> 2] | 0) + A >> 0] = y;
        b[B >> 1] = 0;
        c[i >> 2] = 0;
       } else if ((j | 0) > 7) {
        B = l + 5816 | 0;
        z = b[B >> 1] & 255;
        j = l + 20 | 0;
        A = c[j >> 2] | 0;
        c[j >> 2] = A + 1;
        a[(c[l + 8 >> 2] | 0) + A >> 0] = z;
        b[B >> 1] = (e[B >> 1] | 0) >>> 8;
        c[i >> 2] = (c[i >> 2] | 0) + -8;
        break;
       } else {
        j = l + 20 | 0;
        break;
       } while (0);
       i = c[j >> 2] | 0;
       B = c[H >> 2] | 0;
       i = i >>> 0 > B >>> 0 ? B : i;
       if (i | 0) {
        k = l + 16 | 0;
        bc(c[I >> 2] | 0, c[k >> 2] | 0, i | 0) | 0;
        c[I >> 2] = (c[I >> 2] | 0) + i;
        c[k >> 2] = (c[k >> 2] | 0) + i;
        c[p >> 2] = (c[p >> 2] | 0) + i;
        c[H >> 2] = (c[H >> 2] | 0) - i;
        B = (c[j >> 2] | 0) - i | 0;
        c[j >> 2] = B;
        if (!B) c[k >> 2] = c[l + 8 >> 2];
       }
       l = c[q >> 2] | 0;
       if ((l | 0) == (c[m >> 2] | 0)) break;
       k = l;
       i = c[h >> 2] | 0;
       j = c[r >> 2] | 0;
      }
      j = a[(c[i + 16 >> 2] | 0) + j >> 0] | 0;
      c[q >> 2] = l + 1;
      a[(c[o >> 2] | 0) + l >> 0] = j;
      j = (c[r >> 2] | 0) + 1 | 0;
      c[r >> 2] = j;
      i = c[h >> 2] | 0;
      if (j >>> 0 >= (c[i + 20 >> 2] & 65535) >>> 0) break a;
      l = c[q >> 2] | 0;
     }
     k = l;
     i = c[h >> 2] | 0;
    } else k = l; while (0);
    if (c[i + 44 >> 2] | 0) {
     j = c[q >> 2] | 0;
     if (j >>> 0 > k >>> 0) {
      B = f + 48 | 0;
      c[B >> 2] = bb(c[B >> 2] | 0, (c[G + 8 >> 2] | 0) + k | 0, j - k | 0) | 0;
     }
    }
    if ((c[r >> 2] | 0) == (c[i + 20 >> 2] | 0)) {
     c[r >> 2] = 0;
     c[C >> 2] = 73;
     A = 60;
     break;
    } else {
     h = c[C >> 2] | 0;
     A = 58;
     break;
    }
   } while (0);
   if ((A | 0) == 58) if ((h | 0) == 73) {
    i = G + 28 | 0;
    h = i;
    i = c[i >> 2] | 0;
    A = 60;
   } else A = 83;
   do if ((A | 0) == 60) {
    if (!(c[i + 28 >> 2] | 0)) {
     c[C >> 2] = 91;
     A = 85;
     break;
    }
    o = G + 20 | 0;
    i = c[o >> 2] | 0;
    m = G + 12 | 0;
    p = f + 48 | 0;
    q = G + 8 | 0;
    n = f + 20 | 0;
    r = G + 32 | 0;
    j = i;
    while (1) {
     if ((i | 0) == (c[m >> 2] | 0)) {
      if (i >>> 0 > j >>> 0 ? (c[(c[h >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) c[p >> 2] = bb(c[p >> 2] | 0, (c[q >> 2] | 0) + j | 0, i - j | 0) | 0;
      l = c[F >> 2] | 0;
      i = l + 5820 | 0;
      j = c[i >> 2] | 0;
      do if ((j | 0) == 16) {
       B = l + 5816 | 0;
       A = b[B >> 1] & 255;
       j = l + 20 | 0;
       y = c[j >> 2] | 0;
       c[j >> 2] = y + 1;
       z = l + 8 | 0;
       a[(c[z >> 2] | 0) + y >> 0] = A;
       y = (e[B >> 1] | 0) >>> 8 & 255;
       A = c[j >> 2] | 0;
       c[j >> 2] = A + 1;
       a[(c[z >> 2] | 0) + A >> 0] = y;
       b[B >> 1] = 0;
       c[i >> 2] = 0;
      } else if ((j | 0) > 7) {
       B = l + 5816 | 0;
       z = b[B >> 1] & 255;
       j = l + 20 | 0;
       A = c[j >> 2] | 0;
       c[j >> 2] = A + 1;
       a[(c[l + 8 >> 2] | 0) + A >> 0] = z;
       b[B >> 1] = (e[B >> 1] | 0) >>> 8;
       c[i >> 2] = (c[i >> 2] | 0) + -8;
       break;
      } else {
       j = l + 20 | 0;
       break;
      } while (0);
      i = c[j >> 2] | 0;
      B = c[H >> 2] | 0;
      i = i >>> 0 > B >>> 0 ? B : i;
      if (i | 0) {
       k = l + 16 | 0;
       bc(c[I >> 2] | 0, c[k >> 2] | 0, i | 0) | 0;
       c[I >> 2] = (c[I >> 2] | 0) + i;
       c[k >> 2] = (c[k >> 2] | 0) + i;
       c[n >> 2] = (c[n >> 2] | 0) + i;
       c[H >> 2] = (c[H >> 2] | 0) - i;
       B = (c[j >> 2] | 0) - i | 0;
       c[j >> 2] = B;
       if (!B) c[k >> 2] = c[l + 8 >> 2];
      }
      i = c[o >> 2] | 0;
      if ((i | 0) == (c[m >> 2] | 0)) {
       k = 1;
       j = i;
       break;
      } else j = i;
     }
     k = c[r >> 2] | 0;
     c[r >> 2] = k + 1;
     k = a[(c[(c[h >> 2] | 0) + 28 >> 2] | 0) + k >> 0] | 0;
     c[o >> 2] = i + 1;
     a[(c[q >> 2] | 0) + i >> 0] = k;
     if (!(k << 24 >> 24)) {
      k = k & 255;
      break;
     }
     i = c[o >> 2] | 0;
    }
    if (c[(c[h >> 2] | 0) + 44 >> 2] | 0) {
     i = c[o >> 2] | 0;
     if (i >>> 0 > j >>> 0) c[p >> 2] = bb(c[p >> 2] | 0, (c[q >> 2] | 0) + j | 0, i - j | 0) | 0;
    }
    if (!k) {
     c[r >> 2] = 0;
     c[C >> 2] = 91;
     A = 85;
     break;
    } else {
     h = c[C >> 2] | 0;
     A = 83;
     break;
    }
   } while (0);
   if ((A | 0) == 83) if ((h | 0) == 91) {
    h = G + 28 | 0;
    A = 85;
   } else A = 108;
   do if ((A | 0) == 85) {
    if (!(c[(c[h >> 2] | 0) + 36 >> 2] | 0)) {
     c[C >> 2] = 103;
     A = 110;
     break;
    }
    p = G + 20 | 0;
    i = c[p >> 2] | 0;
    m = G + 12 | 0;
    q = f + 48 | 0;
    r = G + 8 | 0;
    n = f + 20 | 0;
    o = G + 32 | 0;
    j = i;
    while (1) {
     if ((i | 0) == (c[m >> 2] | 0)) {
      if (i >>> 0 > j >>> 0 ? (c[(c[h >> 2] | 0) + 44 >> 2] | 0) != 0 : 0) c[q >> 2] = bb(c[q >> 2] | 0, (c[r >> 2] | 0) + j | 0, i - j | 0) | 0;
      l = c[F >> 2] | 0;
      i = l + 5820 | 0;
      j = c[i >> 2] | 0;
      do if ((j | 0) == 16) {
       B = l + 5816 | 0;
       A = b[B >> 1] & 255;
       j = l + 20 | 0;
       y = c[j >> 2] | 0;
       c[j >> 2] = y + 1;
       z = l + 8 | 0;
       a[(c[z >> 2] | 0) + y >> 0] = A;
       y = (e[B >> 1] | 0) >>> 8 & 255;
       A = c[j >> 2] | 0;
       c[j >> 2] = A + 1;
       a[(c[z >> 2] | 0) + A >> 0] = y;
       b[B >> 1] = 0;
       c[i >> 2] = 0;
      } else if ((j | 0) > 7) {
       B = l + 5816 | 0;
       z = b[B >> 1] & 255;
       j = l + 20 | 0;
       A = c[j >> 2] | 0;
       c[j >> 2] = A + 1;
       a[(c[l + 8 >> 2] | 0) + A >> 0] = z;
       b[B >> 1] = (e[B >> 1] | 0) >>> 8;
       c[i >> 2] = (c[i >> 2] | 0) + -8;
       break;
      } else {
       j = l + 20 | 0;
       break;
      } while (0);
      i = c[j >> 2] | 0;
      B = c[H >> 2] | 0;
      i = i >>> 0 > B >>> 0 ? B : i;
      if (i | 0) {
       k = l + 16 | 0;
       bc(c[I >> 2] | 0, c[k >> 2] | 0, i | 0) | 0;
       c[I >> 2] = (c[I >> 2] | 0) + i;
       c[k >> 2] = (c[k >> 2] | 0) + i;
       c[n >> 2] = (c[n >> 2] | 0) + i;
       c[H >> 2] = (c[H >> 2] | 0) - i;
       B = (c[j >> 2] | 0) - i | 0;
       c[j >> 2] = B;
       if (!B) c[k >> 2] = c[l + 8 >> 2];
      }
      i = c[p >> 2] | 0;
      if ((i | 0) == (c[m >> 2] | 0)) {
       k = 1;
       j = i;
       break;
      } else j = i;
     }
     k = c[o >> 2] | 0;
     c[o >> 2] = k + 1;
     k = a[(c[(c[h >> 2] | 0) + 36 >> 2] | 0) + k >> 0] | 0;
     c[p >> 2] = i + 1;
     a[(c[r >> 2] | 0) + i >> 0] = k;
     if (!(k << 24 >> 24)) {
      k = k & 255;
      break;
     }
     i = c[p >> 2] | 0;
    }
    if (c[(c[h >> 2] | 0) + 44 >> 2] | 0) {
     i = c[p >> 2] | 0;
     if (i >>> 0 > j >>> 0) c[q >> 2] = bb(c[q >> 2] | 0, (c[r >> 2] | 0) + j | 0, i - j | 0) | 0;
    }
    if (!k) {
     c[C >> 2] = 103;
     A = 110;
     break;
    } else {
     h = c[C >> 2] | 0;
     A = 108;
     break;
    }
   } while (0);
   if ((A | 0) == 108) if ((h | 0) == 103) {
    h = G + 28 | 0;
    A = 110;
   }
   do if ((A | 0) == 110) {
    if (!(c[(c[h >> 2] | 0) + 44 >> 2] | 0)) {
     c[C >> 2] = 113;
     break;
    }
    l = G + 20 | 0;
    m = G + 12 | 0;
    if (((c[l >> 2] | 0) + 2 | 0) >>> 0 > (c[m >> 2] | 0) >>> 0) {
     k = c[F >> 2] | 0;
     h = k + 5820 | 0;
     i = c[h >> 2] | 0;
     do if ((i | 0) == 16) {
      B = k + 5816 | 0;
      A = b[B >> 1] & 255;
      i = k + 20 | 0;
      y = c[i >> 2] | 0;
      c[i >> 2] = y + 1;
      z = k + 8 | 0;
      a[(c[z >> 2] | 0) + y >> 0] = A;
      y = (e[B >> 1] | 0) >>> 8 & 255;
      A = c[i >> 2] | 0;
      c[i >> 2] = A + 1;
      a[(c[z >> 2] | 0) + A >> 0] = y;
      b[B >> 1] = 0;
      c[h >> 2] = 0;
     } else if ((i | 0) > 7) {
      B = k + 5816 | 0;
      z = b[B >> 1] & 255;
      i = k + 20 | 0;
      A = c[i >> 2] | 0;
      c[i >> 2] = A + 1;
      a[(c[k + 8 >> 2] | 0) + A >> 0] = z;
      b[B >> 1] = (e[B >> 1] | 0) >>> 8;
      c[h >> 2] = (c[h >> 2] | 0) + -8;
      break;
     } else {
      i = k + 20 | 0;
      break;
     } while (0);
     h = c[i >> 2] | 0;
     B = c[H >> 2] | 0;
     h = h >>> 0 > B >>> 0 ? B : h;
     if (h | 0) {
      j = k + 16 | 0;
      bc(c[I >> 2] | 0, c[j >> 2] | 0, h | 0) | 0;
      c[I >> 2] = (c[I >> 2] | 0) + h;
      c[j >> 2] = (c[j >> 2] | 0) + h;
      B = f + 20 | 0;
      c[B >> 2] = (c[B >> 2] | 0) + h;
      c[H >> 2] = (c[H >> 2] | 0) - h;
      B = (c[i >> 2] | 0) - h | 0;
      c[i >> 2] = B;
      if (!B) c[j >> 2] = c[k + 8 >> 2];
     }
    }
    h = c[l >> 2] | 0;
    if ((h + 2 | 0) >>> 0 <= (c[m >> 2] | 0) >>> 0) {
     B = f + 48 | 0;
     y = c[B >> 2] & 255;
     c[l >> 2] = h + 1;
     z = G + 8 | 0;
     a[(c[z >> 2] | 0) + h >> 0] = y;
     y = (c[B >> 2] | 0) >>> 8 & 255;
     A = c[l >> 2] | 0;
     c[l >> 2] = A + 1;
     a[(c[z >> 2] | 0) + A >> 0] = y;
     c[B >> 2] = 0;
     c[C >> 2] = 113;
    }
   } while (0);
   B = G + 20 | 0;
   do if (!(c[B >> 2] | 0)) {
    h = c[f + 4 >> 2] | 0;
    if (!h) if (D & ((g << 1) - ((g | 0) > 4 ? 9 : 0) | 0) <= ((s << 1) - ((s | 0) > 4 ? 9 : 0) | 0)) {
     c[f + 24 >> 2] = 18040;
     I = -5;
     return I | 0;
    } else h = 0;
   } else {
    l = c[F >> 2] | 0;
    h = l + 5820 | 0;
    i = c[h >> 2] | 0;
    do if ((i | 0) == 16) {
     A = l + 5816 | 0;
     z = b[A >> 1] & 255;
     k = l + 20 | 0;
     x = c[k >> 2] | 0;
     c[k >> 2] = x + 1;
     y = l + 8 | 0;
     a[(c[y >> 2] | 0) + x >> 0] = z;
     x = (e[A >> 1] | 0) >>> 8 & 255;
     z = c[k >> 2] | 0;
     c[k >> 2] = z + 1;
     a[(c[y >> 2] | 0) + z >> 0] = x;
     b[A >> 1] = 0;
     c[h >> 2] = 0;
    } else if ((i | 0) > 7) {
     A = l + 5816 | 0;
     y = b[A >> 1] & 255;
     k = l + 20 | 0;
     z = c[k >> 2] | 0;
     c[k >> 2] = z + 1;
     a[(c[l + 8 >> 2] | 0) + z >> 0] = y;
     b[A >> 1] = (e[A >> 1] | 0) >>> 8;
     c[h >> 2] = (c[h >> 2] | 0) + -8;
     break;
    } else {
     k = l + 20 | 0;
     break;
    } while (0);
    j = c[k >> 2] | 0;
    h = c[H >> 2] | 0;
    j = j >>> 0 > h >>> 0 ? h : j;
    if (j) {
     i = l + 16 | 0;
     bc(c[I >> 2] | 0, c[i >> 2] | 0, j | 0) | 0;
     c[I >> 2] = (c[I >> 2] | 0) + j;
     c[i >> 2] = (c[i >> 2] | 0) + j;
     h = f + 20 | 0;
     c[h >> 2] = (c[h >> 2] | 0) + j;
     h = (c[H >> 2] | 0) - j | 0;
     c[H >> 2] = h;
     A = (c[k >> 2] | 0) - j | 0;
     c[k >> 2] = A;
     if (!A) c[i >> 2] = c[l + 8 >> 2];
    }
    if (h | 0) {
     h = c[f + 4 >> 2] | 0;
     break;
    }
    c[E >> 2] = -1;
    I = 0;
    return I | 0;
   } while (0);
   i = (c[C >> 2] | 0) == 666;
   h = (h | 0) == 0;
   if (i) if (h) A = 142; else {
    c[f + 24 >> 2] = 18040;
    I = -5;
    return I | 0;
   } else if (h) A = 142; else A = 143;
   if ((A | 0) == 142) if (!(((g | 0) == 0 | i) & (c[G + 116 >> 2] | 0) == 0)) A = 143;
   do if ((A | 0) == 143) {
    b : do switch (c[G + 136 >> 2] | 0) {
    case 2:
     {
      n = G + 116 | 0;
      o = G + 96 | 0;
      u = G + 108 | 0;
      t = G + 56 | 0;
      p = G + 5792 | 0;
      q = G + 5796 | 0;
      r = G + 5784 | 0;
      s = G + 5788 | 0;
      v = G + 92 | 0;
      while (1) {
       if (!(c[n >> 2] | 0)) {
        gb(G);
        if (!(c[n >> 2] | 0)) break;
       }
       c[o >> 2] = 0;
       z = a[(c[t >> 2] | 0) + (c[u >> 2] | 0) >> 0] | 0;
       h = c[p >> 2] | 0;
       b[(c[q >> 2] | 0) + (h << 1) >> 1] = 0;
       c[p >> 2] = h + 1;
       a[(c[r >> 2] | 0) + h >> 0] = z;
       z = G + 148 + ((z & 255) << 2) | 0;
       b[z >> 1] = (b[z >> 1] | 0) + 1 << 16 >> 16;
       z = (c[p >> 2] | 0) == ((c[s >> 2] | 0) + -1 | 0);
       c[n >> 2] = (c[n >> 2] | 0) + -1;
       h = (c[u >> 2] | 0) + 1 | 0;
       c[u >> 2] = h;
       if (!z) continue;
       i = c[v >> 2] | 0;
       if ((i | 0) > -1) j = (c[t >> 2] | 0) + i | 0; else j = 0;
       lb(G, j, h - i | 0, 0);
       c[v >> 2] = c[u >> 2];
       l = c[G >> 2] | 0;
       m = c[l + 28 >> 2] | 0;
       h = m + 5820 | 0;
       i = c[h >> 2] | 0;
       do if ((i | 0) == 16) {
        z = m + 5816 | 0;
        y = b[z >> 1] & 255;
        i = m + 20 | 0;
        w = c[i >> 2] | 0;
        c[i >> 2] = w + 1;
        x = m + 8 | 0;
        a[(c[x >> 2] | 0) + w >> 0] = y;
        w = (e[z >> 1] | 0) >>> 8 & 255;
        y = c[i >> 2] | 0;
        c[i >> 2] = y + 1;
        a[(c[x >> 2] | 0) + y >> 0] = w;
        b[z >> 1] = 0;
        c[h >> 2] = 0;
       } else if ((i | 0) > 7) {
        z = m + 5816 | 0;
        x = b[z >> 1] & 255;
        i = m + 20 | 0;
        y = c[i >> 2] | 0;
        c[i >> 2] = y + 1;
        a[(c[m + 8 >> 2] | 0) + y >> 0] = x;
        b[z >> 1] = (e[z >> 1] | 0) >>> 8;
        c[h >> 2] = (c[h >> 2] | 0) + -8;
        break;
       } else {
        i = m + 20 | 0;
        break;
       } while (0);
       h = c[i >> 2] | 0;
       j = l + 16 | 0;
       z = c[j >> 2] | 0;
       h = h >>> 0 > z >>> 0 ? z : h;
       if (h | 0) {
        z = l + 12 | 0;
        k = m + 16 | 0;
        bc(c[z >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
        c[z >> 2] = (c[z >> 2] | 0) + h;
        c[k >> 2] = (c[k >> 2] | 0) + h;
        z = l + 20 | 0;
        c[z >> 2] = (c[z >> 2] | 0) + h;
        c[j >> 2] = (c[j >> 2] | 0) - h;
        z = (c[i >> 2] | 0) - h | 0;
        c[i >> 2] = z;
        if (!z) c[k >> 2] = c[m + 8 >> 2];
       }
       if (!(c[(c[G >> 2] | 0) + 16 >> 2] | 0)) {
        A = 247;
        break b;
       }
      }
      if (!g) A = 247; else {
       c[G + 5812 >> 2] = 0;
       if ((g | 0) == 4) {
        i = c[v >> 2] | 0;
        if ((i | 0) > -1) h = (c[t >> 2] | 0) + i | 0; else h = 0;
        lb(G, h, (c[u >> 2] | 0) - i | 0, 1);
        c[v >> 2] = c[u >> 2];
        l = c[G >> 2] | 0;
        m = c[l + 28 >> 2] | 0;
        h = m + 5820 | 0;
        i = c[h >> 2] | 0;
        do if ((i | 0) == 16) {
         A = m + 5816 | 0;
         z = b[A >> 1] & 255;
         i = m + 20 | 0;
         x = c[i >> 2] | 0;
         c[i >> 2] = x + 1;
         y = m + 8 | 0;
         a[(c[y >> 2] | 0) + x >> 0] = z;
         x = (e[A >> 1] | 0) >>> 8 & 255;
         z = c[i >> 2] | 0;
         c[i >> 2] = z + 1;
         a[(c[y >> 2] | 0) + z >> 0] = x;
         b[A >> 1] = 0;
         c[h >> 2] = 0;
        } else if ((i | 0) > 7) {
         A = m + 5816 | 0;
         y = b[A >> 1] & 255;
         i = m + 20 | 0;
         z = c[i >> 2] | 0;
         c[i >> 2] = z + 1;
         a[(c[m + 8 >> 2] | 0) + z >> 0] = y;
         b[A >> 1] = (e[A >> 1] | 0) >>> 8;
         c[h >> 2] = (c[h >> 2] | 0) + -8;
         break;
        } else {
         i = m + 20 | 0;
         break;
        } while (0);
        h = c[i >> 2] | 0;
        j = l + 16 | 0;
        A = c[j >> 2] | 0;
        h = h >>> 0 > A >>> 0 ? A : h;
        if (h | 0) {
         A = l + 12 | 0;
         k = m + 16 | 0;
         bc(c[A >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
         c[A >> 2] = (c[A >> 2] | 0) + h;
         c[k >> 2] = (c[k >> 2] | 0) + h;
         A = l + 20 | 0;
         c[A >> 2] = (c[A >> 2] | 0) + h;
         c[j >> 2] = (c[j >> 2] | 0) - h;
         A = (c[i >> 2] | 0) - h | 0;
         c[i >> 2] = A;
         if (!A) c[k >> 2] = c[m + 8 >> 2];
        }
        h = (c[(c[G >> 2] | 0) + 16 >> 2] | 0) == 0 ? 2 : 3;
        A = 244;
        break b;
       }
       if (c[p >> 2] | 0) {
        i = c[v >> 2] | 0;
        if ((i | 0) > -1) h = (c[t >> 2] | 0) + i | 0; else h = 0;
        lb(G, h, (c[u >> 2] | 0) - i | 0, 0);
        c[v >> 2] = c[u >> 2];
        l = c[G >> 2] | 0;
        m = c[l + 28 >> 2] | 0;
        h = m + 5820 | 0;
        i = c[h >> 2] | 0;
        do if ((i | 0) == 16) {
         C = m + 5816 | 0;
         z = b[C >> 1] & 255;
         i = m + 20 | 0;
         x = c[i >> 2] | 0;
         c[i >> 2] = x + 1;
         y = m + 8 | 0;
         a[(c[y >> 2] | 0) + x >> 0] = z;
         x = (e[C >> 1] | 0) >>> 8 & 255;
         z = c[i >> 2] | 0;
         c[i >> 2] = z + 1;
         a[(c[y >> 2] | 0) + z >> 0] = x;
         b[C >> 1] = 0;
         c[h >> 2] = 0;
        } else if ((i | 0) > 7) {
         C = m + 5816 | 0;
         y = b[C >> 1] & 255;
         i = m + 20 | 0;
         z = c[i >> 2] | 0;
         c[i >> 2] = z + 1;
         a[(c[m + 8 >> 2] | 0) + z >> 0] = y;
         b[C >> 1] = (e[C >> 1] | 0) >>> 8;
         c[h >> 2] = (c[h >> 2] | 0) + -8;
         break;
        } else {
         i = m + 20 | 0;
         break;
        } while (0);
        h = c[i >> 2] | 0;
        j = l + 16 | 0;
        C = c[j >> 2] | 0;
        h = h >>> 0 > C >>> 0 ? C : h;
        if (h | 0) {
         C = l + 12 | 0;
         k = m + 16 | 0;
         bc(c[C >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
         c[C >> 2] = (c[C >> 2] | 0) + h;
         c[k >> 2] = (c[k >> 2] | 0) + h;
         C = l + 20 | 0;
         c[C >> 2] = (c[C >> 2] | 0) + h;
         c[j >> 2] = (c[j >> 2] | 0) - h;
         C = (c[i >> 2] | 0) - h | 0;
         c[i >> 2] = C;
         if (!C) c[k >> 2] = c[m + 8 >> 2];
        }
        if (!(c[(c[G >> 2] | 0) + 16 >> 2] | 0)) A = 247;
       }
      }
      break;
     }
    case 3:
     {
      p = G + 116 | 0;
      q = (g | 0) == 0;
      r = G + 96 | 0;
      y = G + 108 | 0;
      s = G + 5792 | 0;
      t = G + 5796 | 0;
      u = G + 5784 | 0;
      v = G + 5788 | 0;
      x = G + 56 | 0;
      z = G + 92 | 0;
      w = G + 2440 | 0;
      while (1) {
       h = c[p >> 2] | 0;
       if (h >>> 0 < 259) {
        gb(G);
        h = c[p >> 2] | 0;
        if (q & h >>> 0 < 259) {
         A = 247;
         break b;
        }
        if (!h) break;
        c[r >> 2] = 0;
        if (h >>> 0 > 2) A = 191; else {
         h = c[y >> 2] | 0;
         A = 206;
        }
       } else {
        c[r >> 2] = 0;
        A = 191;
       }
       if ((A | 0) == 191) {
        A = 0;
        o = c[y >> 2] | 0;
        if (!o) {
         h = 0;
         A = 206;
        } else {
         l = (c[x >> 2] | 0) + o | 0;
         m = a[l + -1 >> 0] | 0;
         if (m << 24 >> 24 == (a[l >> 0] | 0)) {
          i = l + 1 | 0;
          if (m << 24 >> 24 == (a[i >> 0] | 0)) if (m << 24 >> 24 == (a[i + 1 >> 0] | 0)) {
           n = l + 258 | 0;
           k = 1;
           do {
            j = l + k | 0;
            i = j + 2 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            i = j + 3 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            i = j + 4 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            i = j + 5 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            i = j + 6 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            i = j + 7 | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            j = k;
            k = k + 8 | 0;
            i = l + k | 0;
            if (m << 24 >> 24 != (a[i >> 0] | 0)) break;
            j = j + 9 | 0;
            i = l + j | 0;
           } while ((j | 0) < 258 ? m << 24 >> 24 == (a[i >> 0] | 0) : 0);
           n = i - n + 258 | 0;
           h = n >>> 0 > h >>> 0 ? h : n;
           c[r >> 2] = h;
           if (h >>> 0 > 2) {
            h = h + 253 | 0;
            j = c[s >> 2] | 0;
            b[(c[t >> 2] | 0) + (j << 1) >> 1] = 1;
            c[s >> 2] = j + 1;
            a[(c[u >> 2] | 0) + j >> 0] = h;
            h = G + 148 + ((d[17732 + (h & 255) >> 0] | 256) + 1 << 2) | 0;
            b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
            b[w >> 1] = (b[w >> 1] | 0) + 1 << 16 >> 16;
            h = (c[s >> 2] | 0) == ((c[v >> 2] | 0) + -1 | 0) & 1;
            j = c[r >> 2] | 0;
            c[p >> 2] = (c[p >> 2] | 0) - j;
            j = (c[y >> 2] | 0) + j | 0;
            c[y >> 2] = j;
            c[r >> 2] = 0;
           } else {
            h = o;
            A = 206;
           }
          } else {
           h = o;
           A = 206;
          } else {
           h = o;
           A = 206;
          }
         } else {
          h = o;
          A = 206;
         }
        }
       }
       if ((A | 0) == 206) {
        A = 0;
        h = a[(c[x >> 2] | 0) + h >> 0] | 0;
        j = c[s >> 2] | 0;
        b[(c[t >> 2] | 0) + (j << 1) >> 1] = 0;
        c[s >> 2] = j + 1;
        a[(c[u >> 2] | 0) + j >> 0] = h;
        h = G + 148 + ((h & 255) << 2) | 0;
        b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
        h = (c[s >> 2] | 0) == ((c[v >> 2] | 0) + -1 | 0) & 1;
        c[p >> 2] = (c[p >> 2] | 0) + -1;
        j = (c[y >> 2] | 0) + 1 | 0;
        c[y >> 2] = j;
       }
       if (!h) continue;
       h = c[z >> 2] | 0;
       if ((h | 0) > -1) i = (c[x >> 2] | 0) + h | 0; else i = 0;
       lb(G, i, j - h | 0, 0);
       c[z >> 2] = c[y >> 2];
       l = c[G >> 2] | 0;
       m = c[l + 28 >> 2] | 0;
       h = m + 5820 | 0;
       i = c[h >> 2] | 0;
       do if ((i | 0) == 16) {
        o = m + 5816 | 0;
        n = b[o >> 1] & 255;
        i = m + 20 | 0;
        j = c[i >> 2] | 0;
        c[i >> 2] = j + 1;
        k = m + 8 | 0;
        a[(c[k >> 2] | 0) + j >> 0] = n;
        j = (e[o >> 1] | 0) >>> 8 & 255;
        n = c[i >> 2] | 0;
        c[i >> 2] = n + 1;
        a[(c[k >> 2] | 0) + n >> 0] = j;
        b[o >> 1] = 0;
        c[h >> 2] = 0;
       } else if ((i | 0) > 7) {
        o = m + 5816 | 0;
        k = b[o >> 1] & 255;
        i = m + 20 | 0;
        n = c[i >> 2] | 0;
        c[i >> 2] = n + 1;
        a[(c[m + 8 >> 2] | 0) + n >> 0] = k;
        b[o >> 1] = (e[o >> 1] | 0) >>> 8;
        c[h >> 2] = (c[h >> 2] | 0) + -8;
        break;
       } else {
        i = m + 20 | 0;
        break;
       } while (0);
       h = c[i >> 2] | 0;
       j = l + 16 | 0;
       o = c[j >> 2] | 0;
       h = h >>> 0 > o >>> 0 ? o : h;
       if (h | 0) {
        o = l + 12 | 0;
        k = m + 16 | 0;
        bc(c[o >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
        c[o >> 2] = (c[o >> 2] | 0) + h;
        c[k >> 2] = (c[k >> 2] | 0) + h;
        o = l + 20 | 0;
        c[o >> 2] = (c[o >> 2] | 0) + h;
        c[j >> 2] = (c[j >> 2] | 0) - h;
        o = (c[i >> 2] | 0) - h | 0;
        c[i >> 2] = o;
        if (!o) c[k >> 2] = c[m + 8 >> 2];
       }
       if (!(c[(c[G >> 2] | 0) + 16 >> 2] | 0)) {
        A = 247;
        break b;
       }
      }
      c[G + 5812 >> 2] = 0;
      if ((g | 0) == 4) {
       i = c[z >> 2] | 0;
       if ((i | 0) > -1) h = (c[x >> 2] | 0) + i | 0; else h = 0;
       lb(G, h, (c[y >> 2] | 0) - i | 0, 1);
       c[z >> 2] = c[y >> 2];
       l = c[G >> 2] | 0;
       m = c[l + 28 >> 2] | 0;
       h = m + 5820 | 0;
       i = c[h >> 2] | 0;
       do if ((i | 0) == 16) {
        A = m + 5816 | 0;
        z = b[A >> 1] & 255;
        i = m + 20 | 0;
        x = c[i >> 2] | 0;
        c[i >> 2] = x + 1;
        y = m + 8 | 0;
        a[(c[y >> 2] | 0) + x >> 0] = z;
        x = (e[A >> 1] | 0) >>> 8 & 255;
        z = c[i >> 2] | 0;
        c[i >> 2] = z + 1;
        a[(c[y >> 2] | 0) + z >> 0] = x;
        b[A >> 1] = 0;
        c[h >> 2] = 0;
       } else if ((i | 0) > 7) {
        A = m + 5816 | 0;
        y = b[A >> 1] & 255;
        i = m + 20 | 0;
        z = c[i >> 2] | 0;
        c[i >> 2] = z + 1;
        a[(c[m + 8 >> 2] | 0) + z >> 0] = y;
        b[A >> 1] = (e[A >> 1] | 0) >>> 8;
        c[h >> 2] = (c[h >> 2] | 0) + -8;
        break;
       } else {
        i = m + 20 | 0;
        break;
       } while (0);
       h = c[i >> 2] | 0;
       j = l + 16 | 0;
       A = c[j >> 2] | 0;
       h = h >>> 0 > A >>> 0 ? A : h;
       if (h | 0) {
        A = l + 12 | 0;
        k = m + 16 | 0;
        bc(c[A >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
        c[A >> 2] = (c[A >> 2] | 0) + h;
        c[k >> 2] = (c[k >> 2] | 0) + h;
        A = l + 20 | 0;
        c[A >> 2] = (c[A >> 2] | 0) + h;
        c[j >> 2] = (c[j >> 2] | 0) - h;
        A = (c[i >> 2] | 0) - h | 0;
        c[i >> 2] = A;
        if (!A) c[k >> 2] = c[m + 8 >> 2];
       }
       h = (c[(c[G >> 2] | 0) + 16 >> 2] | 0) == 0 ? 2 : 3;
       A = 244;
       break b;
      }
      if (c[s >> 2] | 0) {
       i = c[z >> 2] | 0;
       if ((i | 0) > -1) h = (c[x >> 2] | 0) + i | 0; else h = 0;
       lb(G, h, (c[y >> 2] | 0) - i | 0, 0);
       c[z >> 2] = c[y >> 2];
       l = c[G >> 2] | 0;
       m = c[l + 28 >> 2] | 0;
       h = m + 5820 | 0;
       i = c[h >> 2] | 0;
       do if ((i | 0) == 16) {
        C = m + 5816 | 0;
        z = b[C >> 1] & 255;
        i = m + 20 | 0;
        x = c[i >> 2] | 0;
        c[i >> 2] = x + 1;
        y = m + 8 | 0;
        a[(c[y >> 2] | 0) + x >> 0] = z;
        x = (e[C >> 1] | 0) >>> 8 & 255;
        z = c[i >> 2] | 0;
        c[i >> 2] = z + 1;
        a[(c[y >> 2] | 0) + z >> 0] = x;
        b[C >> 1] = 0;
        c[h >> 2] = 0;
       } else if ((i | 0) > 7) {
        C = m + 5816 | 0;
        y = b[C >> 1] & 255;
        i = m + 20 | 0;
        z = c[i >> 2] | 0;
        c[i >> 2] = z + 1;
        a[(c[m + 8 >> 2] | 0) + z >> 0] = y;
        b[C >> 1] = (e[C >> 1] | 0) >>> 8;
        c[h >> 2] = (c[h >> 2] | 0) + -8;
        break;
       } else {
        i = m + 20 | 0;
        break;
       } while (0);
       h = c[i >> 2] | 0;
       j = l + 16 | 0;
       C = c[j >> 2] | 0;
       h = h >>> 0 > C >>> 0 ? C : h;
       if (h | 0) {
        C = l + 12 | 0;
        k = m + 16 | 0;
        bc(c[C >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
        c[C >> 2] = (c[C >> 2] | 0) + h;
        c[k >> 2] = (c[k >> 2] | 0) + h;
        C = l + 20 | 0;
        c[C >> 2] = (c[C >> 2] | 0) + h;
        c[j >> 2] = (c[j >> 2] | 0) - h;
        C = (c[i >> 2] | 0) - h | 0;
        c[i >> 2] = C;
        if (!C) c[k >> 2] = c[m + 8 >> 2];
       }
       if (!(c[(c[G >> 2] | 0) + 16 >> 2] | 0)) A = 247;
      }
      break;
     }
    default:
     {
      h = Ga[c[13312 + ((c[G + 132 >> 2] | 0) * 12 | 0) + 8 >> 2] & 7](G, g) | 0;
      A = 244;
     }
    } while (0);
    if ((A | 0) == 244) {
     if ((h | 1 | 0) == 3) c[C >> 2] = 666;
     if ((h | 2 | 0) == 2) A = 247; else if ((h | 0) != 1) break;
    }
    if ((A | 0) == 247) {
     if (c[H >> 2] | 0) {
      I = 0;
      return I | 0;
     }
     c[E >> 2] = -1;
     I = 0;
     return I | 0;
    }
    c : do switch (g | 0) {
    case 1:
     {
      j = G + 5820 | 0;
      i = c[j >> 2] | 0;
      k = G + 5816 | 0;
      h = e[k >> 1] | 2 << i;
      b[k >> 1] = h;
      if ((i | 0) > 13) {
       i = c[B >> 2] | 0;
       c[B >> 2] = i + 1;
       g = G + 8 | 0;
       a[(c[g >> 2] | 0) + i >> 0] = h;
       h = (e[k >> 1] | 0) >>> 8 & 255;
       i = c[B >> 2] | 0;
       c[B >> 2] = i + 1;
       a[(c[g >> 2] | 0) + i >> 0] = h;
       i = c[j >> 2] | 0;
       h = 2 >>> (16 - i | 0);
       b[k >> 1] = h;
       i = i + -13 | 0;
      } else i = i + 3 | 0;
      h = h & 255;
      c[j >> 2] = i;
      if ((i | 0) > 9) {
       g = c[B >> 2] | 0;
       c[B >> 2] = g + 1;
       i = G + 8 | 0;
       a[(c[i >> 2] | 0) + g >> 0] = h;
       g = (e[k >> 1] | 0) >>> 8 & 255;
       h = c[B >> 2] | 0;
       c[B >> 2] = h + 1;
       a[(c[i >> 2] | 0) + h >> 0] = g;
       b[k >> 1] = 0;
       h = 0;
       i = (c[j >> 2] | 0) + -9 | 0;
      } else i = i + 7 | 0;
      c[j >> 2] = i;
      if ((i | 0) == 16) {
       A = c[B >> 2] | 0;
       c[B >> 2] = A + 1;
       C = G + 8 | 0;
       a[(c[C >> 2] | 0) + A >> 0] = h;
       A = (e[k >> 1] | 0) >>> 8 & 255;
       g = c[B >> 2] | 0;
       c[B >> 2] = g + 1;
       a[(c[C >> 2] | 0) + g >> 0] = A;
       b[k >> 1] = 0;
       c[j >> 2] = 0;
       break c;
      }
      if ((i | 0) > 7) {
       g = c[B >> 2] | 0;
       c[B >> 2] = g + 1;
       a[(c[G + 8 >> 2] | 0) + g >> 0] = h;
       b[k >> 1] = (e[k >> 1] | 0) >>> 8;
       c[j >> 2] = (c[j >> 2] | 0) + -8;
      }
      break;
     }
    case 5:
     break;
    default:
     {
      kb(G, 0, 0, 0);
      if ((g | 0) == 3) {
       g = c[G + 76 >> 2] | 0;
       C = c[G + 68 >> 2] | 0;
       b[C + (g + -1 << 1) >> 1] = 0;
       Xb(C | 0, 0, (g << 1) + -2 | 0) | 0;
       if (!(c[G + 116 >> 2] | 0)) {
        c[G + 108 >> 2] = 0;
        c[G + 92 >> 2] = 0;
        c[G + 5812 >> 2] = 0;
       }
      }
     }
    } while (0);
    l = c[F >> 2] | 0;
    h = l + 5820 | 0;
    i = c[h >> 2] | 0;
    do if ((i | 0) == 16) {
     g = l + 5816 | 0;
     C = b[g >> 1] & 255;
     k = l + 20 | 0;
     z = c[k >> 2] | 0;
     c[k >> 2] = z + 1;
     A = l + 8 | 0;
     a[(c[A >> 2] | 0) + z >> 0] = C;
     z = (e[g >> 1] | 0) >>> 8 & 255;
     C = c[k >> 2] | 0;
     c[k >> 2] = C + 1;
     a[(c[A >> 2] | 0) + C >> 0] = z;
     b[g >> 1] = 0;
     c[h >> 2] = 0;
    } else if ((i | 0) > 7) {
     g = l + 5816 | 0;
     A = b[g >> 1] & 255;
     k = l + 20 | 0;
     C = c[k >> 2] | 0;
     c[k >> 2] = C + 1;
     a[(c[l + 8 >> 2] | 0) + C >> 0] = A;
     b[g >> 1] = (e[g >> 1] | 0) >>> 8;
     c[h >> 2] = (c[h >> 2] | 0) + -8;
     break;
    } else {
     k = l + 20 | 0;
     break;
    } while (0);
    j = c[k >> 2] | 0;
    h = c[H >> 2] | 0;
    j = j >>> 0 > h >>> 0 ? h : j;
    if (j) {
     i = l + 16 | 0;
     bc(c[I >> 2] | 0, c[i >> 2] | 0, j | 0) | 0;
     c[I >> 2] = (c[I >> 2] | 0) + j;
     c[i >> 2] = (c[i >> 2] | 0) + j;
     h = f + 20 | 0;
     c[h >> 2] = (c[h >> 2] | 0) + j;
     h = (c[H >> 2] | 0) - j | 0;
     c[H >> 2] = h;
     g = (c[k >> 2] | 0) - j | 0;
     c[k >> 2] = g;
     if (!g) c[i >> 2] = c[l + 8 >> 2];
    }
    if (!h) {
     c[E >> 2] = -1;
     I = 0;
     return I | 0;
    }
   } while (0);
   if (D) {
    I = 0;
    return I | 0;
   }
   l = G + 24 | 0;
   h = c[l >> 2] | 0;
   if ((h | 0) < 1) {
    I = 1;
    return I | 0;
   }
   i = f + 48 | 0;
   j = c[i >> 2] | 0;
   if ((h | 0) == 2) {
    g = c[B >> 2] | 0;
    c[B >> 2] = g + 1;
    E = G + 8 | 0;
    a[(c[E >> 2] | 0) + g >> 0] = j;
    g = (c[i >> 2] | 0) >>> 8 & 255;
    D = c[B >> 2] | 0;
    c[B >> 2] = D + 1;
    a[(c[E >> 2] | 0) + D >> 0] = g;
    D = (c[i >> 2] | 0) >>> 16 & 255;
    g = c[B >> 2] | 0;
    c[B >> 2] = g + 1;
    a[(c[E >> 2] | 0) + g >> 0] = D;
    g = (c[i >> 2] | 0) >>> 24 & 255;
    D = c[B >> 2] | 0;
    c[B >> 2] = D + 1;
    a[(c[E >> 2] | 0) + D >> 0] = g;
    D = f + 8 | 0;
    g = c[D >> 2] & 255;
    G = c[B >> 2] | 0;
    c[B >> 2] = G + 1;
    a[(c[E >> 2] | 0) + G >> 0] = g;
    G = (c[D >> 2] | 0) >>> 8 & 255;
    g = c[B >> 2] | 0;
    c[B >> 2] = g + 1;
    a[(c[E >> 2] | 0) + g >> 0] = G;
    g = (c[D >> 2] | 0) >>> 16 & 255;
    G = c[B >> 2] | 0;
    c[B >> 2] = G + 1;
    a[(c[E >> 2] | 0) + G >> 0] = g;
    D = (c[D >> 2] | 0) >>> 24 & 255;
    G = c[B >> 2] | 0;
    c[B >> 2] = G + 1;
    a[(c[E >> 2] | 0) + G >> 0] = D;
   } else {
    D = c[B >> 2] | 0;
    c[B >> 2] = D + 1;
    E = G + 8 | 0;
    a[(c[E >> 2] | 0) + D >> 0] = j >>> 24;
    D = c[B >> 2] | 0;
    c[B >> 2] = D + 1;
    a[(c[E >> 2] | 0) + D >> 0] = j >>> 16;
    D = c[i >> 2] | 0;
    G = c[B >> 2] | 0;
    c[B >> 2] = G + 1;
    a[(c[E >> 2] | 0) + G >> 0] = D >>> 8;
    G = c[B >> 2] | 0;
    c[B >> 2] = G + 1;
    a[(c[E >> 2] | 0) + G >> 0] = D;
   }
   k = c[F >> 2] | 0;
   h = k + 5820 | 0;
   i = c[h >> 2] | 0;
   do if ((i | 0) == 16) {
    G = k + 5816 | 0;
    F = b[G >> 1] & 255;
    i = k + 20 | 0;
    D = c[i >> 2] | 0;
    c[i >> 2] = D + 1;
    E = k + 8 | 0;
    a[(c[E >> 2] | 0) + D >> 0] = F;
    D = (e[G >> 1] | 0) >>> 8 & 255;
    F = c[i >> 2] | 0;
    c[i >> 2] = F + 1;
    a[(c[E >> 2] | 0) + F >> 0] = D;
    b[G >> 1] = 0;
    c[h >> 2] = 0;
   } else if ((i | 0) > 7) {
    G = k + 5816 | 0;
    E = b[G >> 1] & 255;
    i = k + 20 | 0;
    F = c[i >> 2] | 0;
    c[i >> 2] = F + 1;
    a[(c[k + 8 >> 2] | 0) + F >> 0] = E;
    b[G >> 1] = (e[G >> 1] | 0) >>> 8;
    c[h >> 2] = (c[h >> 2] | 0) + -8;
    break;
   } else {
    i = k + 20 | 0;
    break;
   } while (0);
   h = c[i >> 2] | 0;
   G = c[H >> 2] | 0;
   h = h >>> 0 > G >>> 0 ? G : h;
   if (h | 0) {
    j = k + 16 | 0;
    bc(c[I >> 2] | 0, c[j >> 2] | 0, h | 0) | 0;
    c[I >> 2] = (c[I >> 2] | 0) + h;
    c[j >> 2] = (c[j >> 2] | 0) + h;
    I = f + 20 | 0;
    c[I >> 2] = (c[I >> 2] | 0) + h;
    c[H >> 2] = (c[H >> 2] | 0) - h;
    I = (c[i >> 2] | 0) - h | 0;
    c[i >> 2] = I;
    if (!I) c[j >> 2] = c[k + 8 >> 2];
   }
   h = c[l >> 2] | 0;
   if ((h | 0) > 0) c[l >> 2] = 0 - h;
   I = (c[B >> 2] | 0) == 0 & 1;
   return I | 0;
  }
 } while (0);
 c[f + 24 >> 2] = 18007;
 I = -2;
 return I | 0;
}

function Pa(d, e, f, g) {
 d = d | 0;
 e = e | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0;
 J = i;
 i = i + 65712 | 0;
 H = J + 80 | 0;
 I = J + 16 | 0;
 m = J + 84 | 0;
 n = J;
 h = c[5122] | 0;
 a : do if (!h) {
  do if (g | 0) {
   h = Kb(g, 17210) | 0;
   if (h | 0) {
    j = Za(0, h) | 0;
    k = D;
    c[n >> 2] = 0;
    c[n + 4 >> 2] = 0;
    c[n + 8 >> 2] = 0;
    c[n + 12 >> 2] = 0;
    l = Qb(65776) | 0;
    if (!l) {
     Wa(0, h) | 0;
     break;
    } else {
     c[l >> 2] = 4;
     c[l + 4 >> 2] = 1;
     c[l + 8 >> 2] = 2;
     c[l + 12 >> 2] = 4;
     c[l + 16 >> 2] = 1;
     c[l + 20 >> 2] = 5;
     c[l + 24 >> 2] = 6;
     c[l + 28 >> 2] = 0;
     c[l + 36 >> 2] = 0;
     c[l + 40 >> 2] = 0;
     c[l + 44 >> 2] = h;
     c[l + 48 >> 2] = 0;
     c[l + 52 >> 2] = 0;
     c[l + 56 >> 2] = 0;
     p = l + 60 | 0;
     h = I;
     q = p + 60 | 0;
     do {
      c[p >> 2] = c[h >> 2];
      p = p + 4 | 0;
      h = h + 4 | 0;
     } while ((p | 0) < (q | 0));
     c[l + 120 >> 2] = 0;
     bc(l + 124 | 0, m | 0, 65620) | 0;
     F = l + 65744 | 0;
     c[F >> 2] = j;
     c[F + 4 >> 2] = k;
     F = l + 65752 | 0;
     c[F >> 2] = c[n >> 2];
     c[F + 4 >> 2] = c[n + 4 >> 2];
     c[F + 8 >> 2] = c[n + 8 >> 2];
     c[F + 12 >> 2] = c[n + 12 >> 2];
     c[l + 65768 >> 2] = 0;
     c[5122] = l;
     break a;
    }
   }
  } while (0);
  c[5122] = 0;
  b : do if (!3) {
   h = 16203;
   G = 10;
  } else {
   h = 16203;
   j = 16203;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break b;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     G = 10;
     break;
    }
   }
  } while (0);
  if ((G | 0) == 10) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  k = h - 16203 | 0;
  h = c[3542] | 0;
  do if (!h) {
   h = a[14226] | 0;
   a[14226] = h + 255 | h;
   h = c[3538] | 0;
   if (!(h & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    j = c[3549] | 0;
    c[3545] = j;
    c[3543] = j;
    h = j + (c[3550] | 0) | 0;
    c[3542] = h;
    G = 20;
    break;
   } else {
    c[3538] = h | 32;
    h = 0;
    G = 23;
    break;
   }
  } else {
   j = c[3543] | 0;
   G = 20;
  } while (0);
  do if ((G | 0) == 20) if ((h - j | 0) >>> 0 < k >>> 0) {
   h = Ba[c[14188 >> 2] & 7](14152, 16203, k) | 0;
   G = 23;
   break;
  } else {
   bc(j | 0, 16203, k | 0) | 0;
   c[3543] = (c[3543] | 0) + k;
   break;
  } while (0);
  if ((G | 0) == 23) if ((h | 0) != (k | 0)) if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) {
   I = 1;
   i = J;
   return I | 0;
  }
  k = a[14227] | 0;
  if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
   h = c[3543] | 0;
   j = c[3542] | 0;
   if (h >>> 0 < j >>> 0) {
    c[3543] = h + 1;
    a[h >> 0] = 10;
    I = 1;
    i = J;
    return I | 0;
   }
  }
  a[I >> 0] = 10;
  do if (!j) {
   k = b[7113] | 0;
   h = (k & 65535) << 24 >> 24;
   a[14226] = h + 255 | h;
   h = c[3538] | 0;
   if (!(h & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    l = c[3549] | 0;
    c[3545] = l;
    c[3543] = l;
    j = l + (c[3550] | 0) | 0;
    c[3542] = j;
    h = (k & 65535) >>> 8 & 255;
    G = 34;
    break;
   } else {
    c[3538] = h | 32;
    break;
   }
  } else {
   l = c[3543] | 0;
   h = k;
   G = 34;
  } while (0);
  do if ((G | 0) == 34) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
   Ba[c[14188 >> 2] & 7](14152, I, 1) | 0;
   break;
  } else {
   c[3543] = l + 1;
   a[l >> 0] = 10;
   break;
  } while (0);
  I = 1;
  i = J;
  return I | 0;
 } else l = h; while (0);
 k = d;
 c : do if (!(k & 3)) {
  h = d;
  G = 41;
 } else {
  j = d;
  h = k;
  while (1) {
   if (!(a[j >> 0] | 0)) break c;
   j = j + 1 | 0;
   h = j;
   if (!(h & 3)) {
    h = j;
    G = 41;
    break;
   }
  }
 } while (0);
 if ((G | 0) == 41) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - k | 0;
 if (h >>> 0 > 4) {
  j = d + h + -4 | 0;
  h = a[j >> 0] | 0;
  k = h & 255;
  switch (h << 24 >> 24) {
  case 0:
   {
    j = 46;
    h = 0;
    break;
   }
  case 46:
   {
    G = 49;
    break;
   }
  default:
   if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) == 46) G = 49; else j = 46;
  }
  d : do if ((G | 0) == 49) {
   h = j + 1 | 0;
   k = a[h >> 0] | 0;
   j = k & 255;
   switch (k << 24 >> 24) {
   case 0:
    {
     j = 108;
     h = 0;
     break d;
    }
   case 108:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 108) {
     j = 108;
     h = k;
     break d;
    }
   }
   j = h + 1 | 0;
   h = a[j >> 0] | 0;
   k = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 117;
     h = 0;
     break d;
    }
   case 117:
    break;
   default:
    if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) != 117) {
     j = 117;
     break d;
    }
   }
   k = j + 1 | 0;
   h = a[k >> 0] | 0;
   j = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 97;
     h = 0;
     break d;
    }
   case 97:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 97) {
     j = 97;
     break d;
    }
   }
   j = 0;
   h = a[k + 1 >> 0] | 0;
  } while (0);
  G = h & 255;
  if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) == (((G + -65 | 0) >>> 0 < 26 ? G | 32 : G) | 0)) G = 54; else G = 51;
 } else G = 51;
 if ((G | 0) == 51) {
  h = a[d >> 0] | 0;
  if (h << 24 >> 24 == 45) {
   h = a[d + 1 >> 0] | 0;
   j = 0;
  } else j = 45;
  if (j << 24 >> 24 == h << 24 >> 24) G = 54; else m = d;
 }
 if ((G | 0) == 54) m = 16239;
 k = m;
 e : do if (!(k & 3)) {
  h = m;
  G = 58;
 } else {
  j = m;
  h = k;
  while (1) {
   if (!(a[j >> 0] | 0)) break e;
   j = j + 1 | 0;
   h = j;
   if (!(h & 3)) {
    h = j;
    G = 58;
    break;
   }
  }
 } while (0);
 if ((G | 0) == 58) {
  while (1) {
   j = c[h >> 2] | 0;
   if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
  }
  if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
 }
 h = h - k | 0;
 if (h >>> 0 > 4) {
  j = m + h + -4 | 0;
  h = a[j >> 0] | 0;
  k = h & 255;
  switch (h << 24 >> 24) {
  case 0:
   {
    j = 46;
    h = 0;
    break;
   }
  case 46:
   {
    G = 66;
    break;
   }
  default:
   if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) == 46) G = 66; else j = 46;
  }
  f : do if ((G | 0) == 66) {
   j = j + 1 | 0;
   h = a[j >> 0] | 0;
   k = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 98;
     h = 0;
     break f;
    }
   case 98:
    break;
   default:
    if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) != 98) {
     j = 98;
     break f;
    }
   }
   j = j + 1 | 0;
   h = a[j >> 0] | 0;
   k = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 109;
     h = 0;
     break f;
    }
   case 109:
    break;
   default:
    if ((((k + -65 | 0) >>> 0 < 26 ? k | 32 : k) | 0) != 109) {
     j = 109;
     break f;
    }
   }
   k = j + 1 | 0;
   h = a[k >> 0] | 0;
   j = h & 255;
   switch (h << 24 >> 24) {
   case 0:
    {
     j = 112;
     h = 0;
     break f;
    }
   case 112:
    break;
   default:
    if ((((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) != 112) {
     j = 112;
     break f;
    }
   }
   j = 0;
   h = a[k + 1 >> 0] | 0;
  } while (0);
  h = h & 255;
  h = (((j + -65 | 0) >>> 0 < 26 ? j | 32 : j) | 0) == (((h + -65 | 0) >>> 0 < 26 ? h | 32 : h) | 0);
 } else h = 0;
 k = h ? 8 : 13;
 E = h << 31 >> 31;
 g : do if (!l) G = 146; else {
  F = l + 56 | 0;
  if ((c[F >> 2] | 0) == 1) if (Sa(l) | 0) {
   G = 146;
   break;
  }
  C = (m | 0) == 0 ? 20481 : m;
  s = C;
  r = (s & 3 | 0) == 0;
  h : do if (r) {
   h = C;
   G = 74;
  } else {
   j = C;
   h = s;
   while (1) {
    if (!(a[j >> 0] | 0)) break h;
    j = j + 1 | 0;
    h = j;
    if (!(h & 3)) {
     h = j;
     G = 74;
     break;
    }
   }
  } while (0);
  if ((G | 0) == 74) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  o = h - s | 0;
  u = l + 65700 | 0;
  c[u >> 2] = 2097152;
  A = l + 64 | 0;
  t = l + 152 | 0;
  c[t >> 2] = (E | 1 | 0) == 9 ? 2 : 0;
  c[l + 65704 >> 2] = 0;
  B = l + 156 | 0;
  c[B >> 2] = k;
  c[l + 65708 >> 2] = 0;
  y = l + 120 | 0;
  c[y >> 2] = 0;
  c[l + 124 >> 2] = 0;
  z = l + 160 | 0;
  c[z >> 2] = 0;
  w = l + 44 | 0;
  h = c[w >> 2] | 0;
  v = l + 16 | 0;
  x = l + 28 | 0;
  j = c[x >> 2] | 0;
  if (!(c[v >> 2] | 0)) {
   m = Ga[c[l + 36 >> 2] & 7](j, h) | 0;
   k = (m | 0) == -1;
   m = k ? -1 : m;
   k = k ? -1 : 0;
  } else {
   m = Ga[c[l + 12 >> 2] & 7](j, h) | 0;
   k = D;
  }
  n = l + 128 | 0;
  c[n >> 2] = m;
  c[n + 4 >> 2] = k;
  c[l + 144 >> 2] = o + 46;
  c[l + 148 >> 2] = 32;
  n = Qb(o + 78 | 0) | 0;
  d = l + 136 | 0;
  c[d >> 2] = n;
  c[l + 140 >> 2] = 0;
  a[n >> 0] = 80;
  a[n + 1 >> 0] = 75;
  a[n + 2 >> 0] = 1;
  a[n + 3 >> 0] = 2;
  a[n + 4 >> 0] = 0;
  a[n + 5 >> 0] = 0;
  a[n + 6 >> 0] = 20;
  a[n + 7 >> 0] = 0;
  h = n + 8 | 0;
  q = c[t >> 2] | 0;
  a[h >> 0] = q;
  a[n + 9 >> 0] = q >>> 8;
  if (q >>> 0 >= 65536) {
   a[h >> 0] = -1;
   a[h + 1 >> 0] = -1 >> 8;
  }
  h = n + 10 | 0;
  q = c[B >> 2] | 0;
  a[h >> 0] = q;
  a[n + 11 >> 0] = q >>> 8;
  if (q >>> 0 >= 65536) {
   a[h >> 0] = -1;
   a[h + 1 >> 0] = -1 >> 8;
  }
  h = c[u >> 2] | 0;
  a[n + 12 >> 0] = h;
  a[n + 13 >> 0] = h >>> 8;
  a[n + 14 >> 0] = h >>> 16;
  a[n + 15 >> 0] = h >>> 24;
  h = n + 28 | 0;
  j = o & 255;
  p = n + 16 | 0;
  q = p + 12 | 0;
  do {
   a[p >> 0] = 0;
   p = p + 1 | 0;
  } while ((p | 0) < (q | 0));
  a[h >> 0] = j;
  a[n + 29 >> 0] = o >>> 8;
  if (o >>> 0 >= 65536) {
   a[h >> 0] = -1;
   a[h + 1 >> 0] = -1 >> 8;
  }
  h = k >>> 0 > 0 | (k | 0) == 0 & m >>> 0 > 4294967294;
  j = n + 42 | 0;
  p = n + 30 | 0;
  q = p + 12 | 0;
  do {
   a[p >> 0] = 0;
   p = p + 1 | 0;
  } while ((p | 0) < (q | 0));
  if (h) {
   a[j >> 0] = -1;
   a[j + 1 >> 0] = -1 >> 8;
   a[j + 2 >> 0] = -1 >> 16;
   a[j + 3 >> 0] = -1 >> 24;
  } else {
   q = l + 65752 | 0;
   q = Vb(m | 0, 0, c[q >> 2] | 0, c[q + 4 >> 2] | 0) | 0;
   p = D;
   a[j >> 0] = q;
   m = Yb(q | 0, p | 0, 8) | 0;
   a[n + 43 >> 0] = m;
   m = Yb(q | 0, p | 0, 16) | 0;
   a[n + 44 >> 0] = m;
   m = Yb(q | 0, p | 0, 24) | 0;
   a[n + 45 >> 0] = m;
   if (!(p >>> 0 < 1 | (p | 0) == 1 & q >>> 0 < 0)) {
    a[j >> 0] = -1;
    a[j + 1 >> 0] = -1 >> 8;
    a[j + 2 >> 0] = -1 >> 16;
    a[j + 3 >> 0] = -1 >> 24;
   }
  }
  if (o | 0) {
   a[n + 46 >> 0] = a[C >> 0] | 0;
   if ((o | 0) != 1) {
    h = 1;
    do {
     a[(c[d >> 2] | 0) + 46 + h >> 0] = a[C + h >> 0] | 0;
     h = h + 1 | 0;
    } while ((h | 0) != (o | 0));
   }
  }
  if (!(c[d >> 2] | 0)) G = 146; else {
   o = l + 65712 | 0;
   c[o >> 2] = 0;
   p = l + 65720 | 0;
   c[p >> 2] = 0;
   c[p + 4 >> 2] = 0;
   c[p + 8 >> 2] = 0;
   c[p + 12 >> 2] = 0;
   c[p + 16 >> 2] = 0;
   c[p + 20 >> 2] = 0;
   i : do if (r) {
    h = C;
    G = 99;
   } else {
    j = C;
    h = s;
    while (1) {
     if (!(a[j >> 0] | 0)) break i;
     j = j + 1 | 0;
     h = j;
     if (!(h & 3)) {
      h = j;
      G = 99;
      break;
     }
    }
   } while (0);
   if ((G | 0) == 99) {
    while (1) {
     j = c[h >> 2] | 0;
     if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
    }
    if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
   }
   d = h - s | 0;
   s = l + 65760 | 0;
   h = c[w >> 2] | 0;
   do if ((c[s >> 2] | 0) == 0 & (c[s + 4 >> 2] | 0) == 0) {
    a[I >> 0] = 42;
    j = I + 1 | 0;
    a[j >> 0] = 84;
    k = I + 2 | 0;
    a[k >> 0] = 73;
    m = I + 3 | 0;
    a[m >> 0] = 77;
    n = l + 8 | 0;
    if ((Fa[c[n >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) == 4) {
     s = c[w >> 2] | 0;
     a[I >> 0] = 76;
     a[j >> 0] = 80;
     a[k >> 0] = 48;
     a[m >> 0] = 55;
     if ((Fa[c[n >> 2] & 3](c[x >> 2] | 0, s, I, 4) | 0) != 4) {
      h = -1;
      break;
     }
     h = c[w >> 2] | 0;
     a[I >> 0] = 48;
     a[j >> 0] = 48;
     h = ((Fa[c[n >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0) != 2) << 31 >> 31;
     G = 109;
    } else h = -1;
   } else {
    a[I >> 0] = 80;
    a[I + 1 >> 0] = 75;
    a[I + 2 >> 0] = 3;
    a[I + 3 >> 0] = 4;
    h = ((Fa[c[l + 8 >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) != 4) << 31 >> 31;
    G = 109;
   } while (0);
   do if ((G | 0) == 109) if (!h) {
    h = c[w >> 2] | 0;
    m = l + 8 | 0;
    j = c[m >> 2] | 0;
    k = c[x >> 2] | 0;
    if (!(c[o >> 2] | 0)) {
     a[I >> 0] = 20;
     a[I + 1 >> 0] = 0;
     h = ((Fa[j & 3](k, h, I, 2) | 0) != 2) << 31 >> 31;
    } else {
     a[I >> 0] = 45;
     a[I + 1 >> 0] = 0;
     h = ((Fa[j & 3](k, h, I, 2) | 0) != 2) << 31 >> 31;
    }
    if (h | 0) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    t = c[t >> 2] | 0;
    a[I >> 0] = t;
    k = I + 1 | 0;
    a[k >> 0] = t >>> 8;
    if (t >>> 0 >= 65536) b[I >> 1] = -1;
    if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0) != 2) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    t = c[B >> 2] | 0;
    a[I >> 0] = t;
    a[k >> 0] = t >>> 8;
    if (t >>> 0 >= 65536) b[I >> 1] = -1;
    if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0) != 2) {
     h = -1;
     break;
    }
    t = c[w >> 2] | 0;
    u = c[u >> 2] | 0;
    a[I >> 0] = u;
    a[k >> 0] = u >>> 8;
    a[I + 2 >> 0] = u >>> 16;
    a[I + 3 >> 0] = u >>> 24;
    if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, t, I, 4) | 0) != 4) {
     h = -1;
     break;
    }
    u = c[w >> 2] | 0;
    c[I >> 2] = 0;
    if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, u, I, 4) | 0) != 4) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    if (!(c[o >> 2] | 0)) {
     c[I >> 2] = 0;
     h = ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) != 4) << 31 >> 31;
    } else {
     c[I >> 2] = -1;
     h = ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) != 4) << 31 >> 31;
    }
    if (h | 0) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    if (!(c[o >> 2] | 0)) {
     c[I >> 2] = 0;
     h = ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) != 4) << 31 >> 31;
    } else {
     c[I >> 2] = -1;
     h = ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 4) | 0) != 4) << 31 >> 31;
    }
    if (h | 0) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    a[I >> 0] = d;
    a[k >> 0] = d >>> 8;
    if (d >>> 0 >= 65536) b[I >> 1] = -1;
    if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0) != 2) {
     h = -1;
     break;
    }
    h = c[w >> 2] | 0;
    a[I >> 0] = (c[o >> 2] | 0) == 0 ? 0 : 20;
    a[k >> 0] = 0;
    h = (Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0) != 2;
    if ((d | 0) != 0 & (h ^ 1)) {
     if ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, c[w >> 2] | 0, C, d) | 0) != (d | 0) | h) {
      h = -1;
      break;
     }
    } else if (h) {
     h = -1;
     break;
    }
    if (!(c[o >> 2] | 0)) {
     h = 0;
     break;
    }
    h = c[w >> 2] | 0;
    j = c[x >> 2] | 0;
    if (!(c[v >> 2] | 0)) {
     h = Ga[c[l + 36 >> 2] & 7](j, h) | 0;
     j = (h | 0) == -1;
     h = j ? -1 : h;
     j = j ? -1 : 0;
    } else {
     h = Ga[c[l + 12 >> 2] & 7](j, h) | 0;
     j = D;
    }
    C = p;
    c[C >> 2] = h;
    c[C + 4 >> 2] = j;
    h = c[w >> 2] | 0;
    a[I >> 0] = 1;
    a[k >> 0] = 0;
    Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0;
    h = c[w >> 2] | 0;
    a[I >> 0] = 16;
    a[k >> 0] = 0;
    Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 2) | 0;
    h = c[w >> 2] | 0;
    C = I;
    c[C >> 2] = 0;
    c[C + 4 >> 2] = 0;
    Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 8) | 0;
    h = c[w >> 2] | 0;
    C = I;
    c[C >> 2] = 0;
    c[C + 4 >> 2] = 0;
    h = ((Fa[c[m >> 2] & 3](c[x >> 2] | 0, h, I, 8) | 0) != 8) << 31 >> 31;
   } else h = -1; while (0);
   c[l + 68 >> 2] = 0;
   c[l + 80 >> 2] = 65536;
   c[l + 76 >> 2] = l + 164;
   c[l + 72 >> 2] = 0;
   c[l + 84 >> 2] = 0;
   c[l + 108 >> 2] = 0;
   if (!h) {
    do if ((c[B >> 2] | 0) == 8) {
     if (c[z >> 2] | 0) break;
     c[l + 96 >> 2] = 0;
     c[l + 100 >> 2] = 0;
     c[l + 104 >> 2] = 0;
     if (cb(A, E) | 0) {
      G = 146;
      break g;
     }
     c[y >> 2] = 8;
    } while (0);
    c[F >> 2] = 1;
    h = c[5122] | 0;
    j : do if (h | 0) {
     if (!(c[h + 56 >> 2] | 0)) break;
     y = h + 64 | 0;
     m = h + 65704 | 0;
     c[m >> 2] = bb(c[m >> 2] | 0, e, f) | 0;
     c[y >> 2] = e;
     m = h + 68 | 0;
     c[m >> 2] = f;
     n = h + 8 | 0;
     d = h + 80 | 0;
     o = h + 28 | 0;
     p = h + 44 | 0;
     q = h + 164 | 0;
     r = h + 124 | 0;
     s = h + 65728 | 0;
     t = h + 72 | 0;
     u = h + 65736 | 0;
     v = h + 76 | 0;
     w = h + 156 | 0;
     x = h + 160 | 0;
     l = h + 84 | 0;
     k : do if (f | 0) do {
      h = c[d >> 2] | 0;
      while (1) {
       if (!h) {
        e = Fa[c[n >> 2] & 3](c[o >> 2] | 0, c[p >> 2] | 0, q, c[r >> 2] | 0) | 0;
        f = c[r >> 2] | 0;
        F = s;
        F = Wb(c[F >> 2] | 0, c[F + 4 >> 2] | 0, f | 0, 0) | 0;
        E = s;
        c[E >> 2] = F;
        c[E + 4 >> 2] = D;
        E = u;
        E = Wb(c[E >> 2] | 0, c[E + 4 >> 2] | 0, c[t >> 2] | 0, 0) | 0;
        F = u;
        c[F >> 2] = E;
        c[F + 4 >> 2] = D;
        c[t >> 2] = 0;
        c[r >> 2] = 0;
        c[d >> 2] = 65536;
        c[v >> 2] = q;
        if ((e | 0) == (f | 0)) h = 65536; else break j;
       }
       if ((c[w >> 2] | 0) == 8) if (!(c[x >> 2] | 0)) break;
       j = c[m >> 2] | 0;
       k = j >>> 0 < h >>> 0 ? j : h;
       if (k) {
        h = 0;
        do {
         a[(c[v >> 2] | 0) + h >> 0] = a[(c[y >> 2] | 0) + h >> 0] | 0;
         h = h + 1 | 0;
        } while (h >>> 0 < k >>> 0);
        j = c[m >> 2] | 0;
        h = c[d >> 2] | 0;
       }
       f = j - k | 0;
       c[m >> 2] = f;
       h = h - k | 0;
       c[d >> 2] = h;
       c[y >> 2] = (c[y >> 2] | 0) + k;
       c[v >> 2] = (c[v >> 2] | 0) + k;
       c[t >> 2] = (c[t >> 2] | 0) + k;
       c[l >> 2] = (c[l >> 2] | 0) + k;
       c[r >> 2] = (c[r >> 2] | 0) + k;
       if (!f) break k;
      }
      e = c[l >> 2] | 0;
      f = ib(y, 0) | 0;
      c[r >> 2] = (c[l >> 2] | 0) - e + (c[r >> 2] | 0);
      if (f | 0) break j;
     } while ((c[m >> 2] | 0) != 0); while (0);
     if (!(Sa(c[5122] | 0) | 0)) {
      I = 0;
      i = J;
      return I | 0;
     }
     l : do if (!1) {
      h = 16329;
      G = 231;
     } else {
      h = 16329;
      j = 16329;
      while (1) {
       if (!(a[h >> 0] | 0)) {
        h = j;
        break l;
       }
       h = h + 1 | 0;
       j = h;
       if (!(j & 3)) {
        G = 231;
        break;
       }
      }
     } while (0);
     if ((G | 0) == 231) {
      while (1) {
       j = c[h >> 2] | 0;
       if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
      }
      if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
     }
     k = h - 16329 | 0;
     h = c[3542] | 0;
     do if (!h) {
      h = a[14226] | 0;
      a[14226] = h + 255 | h;
      h = c[3538] | 0;
      if (!(h & 8)) {
       c[3540] = 0;
       c[3539] = 0;
       j = c[3549] | 0;
       c[3545] = j;
       c[3543] = j;
       h = j + (c[3550] | 0) | 0;
       c[3542] = h;
       G = 241;
       break;
      } else {
       c[3538] = h | 32;
       h = 0;
       G = 244;
       break;
      }
     } else {
      j = c[3543] | 0;
      G = 241;
     } while (0);
     do if ((G | 0) == 241) if ((h - j | 0) >>> 0 < k >>> 0) {
      h = Ba[c[14188 >> 2] & 7](14152, 16329, k) | 0;
      G = 244;
      break;
     } else {
      bc(j | 0, 16329, k | 0) | 0;
      c[3543] = (c[3543] | 0) + k;
      break;
     } while (0);
     do if ((G | 0) == 244) {
      if ((h | 0) == (k | 0)) break;
      if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) break g;
     } while (0);
     k = a[14227] | 0;
     do if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
      h = c[3543] | 0;
      j = c[3542] | 0;
      if (h >>> 0 >= j >>> 0) break;
      c[3543] = h + 1;
      a[h >> 0] = 10;
      break g;
     } while (0);
     a[I >> 0] = 10;
     do if (!j) {
      k = b[7113] | 0;
      h = (k & 65535) << 24 >> 24;
      a[14226] = h + 255 | h;
      h = c[3538] | 0;
      if (!(h & 8)) {
       c[3540] = 0;
       c[3539] = 0;
       l = c[3549] | 0;
       c[3545] = l;
       c[3543] = l;
       j = l + (c[3550] | 0) | 0;
       c[3542] = j;
       h = (k & 65535) >>> 8 & 255;
       G = 255;
       break;
      } else {
       c[3538] = h | 32;
       break;
      }
     } else {
      l = c[3543] | 0;
      h = k;
      G = 255;
     } while (0);
     do if ((G | 0) == 255) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
      Ba[c[14188 >> 2] & 7](14152, I, 1) | 0;
      break;
     } else {
      c[3543] = l + 1;
      a[l >> 0] = 10;
      break;
     } while (0);
     break g;
    } while (0);
    m : do if (!0) {
     h = 16296;
     G = 199;
    } else {
     h = 16296;
     j = 16296;
     while (1) {
      if (!(a[h >> 0] | 0)) {
       h = j;
       break m;
      }
      h = h + 1 | 0;
      j = h;
      if (!(j & 3)) {
       G = 199;
       break;
      }
     }
    } while (0);
    if ((G | 0) == 199) {
     while (1) {
      j = c[h >> 2] | 0;
      if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
     }
     if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
    }
    k = h - 16296 | 0;
    h = c[3542] | 0;
    do if (!h) {
     h = a[14226] | 0;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      j = c[3549] | 0;
      c[3545] = j;
      c[3543] = j;
      h = j + (c[3550] | 0) | 0;
      c[3542] = h;
      G = 209;
      break;
     } else {
      c[3538] = h | 32;
      h = 0;
      G = 212;
      break;
     }
    } else {
     j = c[3543] | 0;
     G = 209;
    } while (0);
    do if ((G | 0) == 209) if ((h - j | 0) >>> 0 < k >>> 0) {
     h = Ba[c[14188 >> 2] & 7](14152, 16296, k) | 0;
     G = 212;
     break;
    } else {
     bc(j | 0, 16296, k | 0) | 0;
     c[3543] = (c[3543] | 0) + k;
     break;
    } while (0);
    do if ((G | 0) == 212) {
     if ((h | 0) == (k | 0)) break;
     if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) {
      G = 177;
      break g;
     }
    } while (0);
    k = a[14227] | 0;
    do if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
     h = c[3543] | 0;
     j = c[3542] | 0;
     if (h >>> 0 >= j >>> 0) break;
     c[3543] = h + 1;
     a[h >> 0] = 10;
     G = 177;
     break g;
    } while (0);
    a[I >> 0] = 10;
    do if (!j) {
     k = b[7113] | 0;
     h = (k & 65535) << 24 >> 24;
     a[14226] = h + 255 | h;
     h = c[3538] | 0;
     if (!(h & 8)) {
      c[3540] = 0;
      c[3539] = 0;
      l = c[3549] | 0;
      c[3545] = l;
      c[3543] = l;
      j = l + (c[3550] | 0) | 0;
      c[3542] = j;
      h = (k & 65535) >>> 8 & 255;
      G = 223;
      break;
     } else {
      c[3538] = h | 32;
      break;
     }
    } else {
     l = c[3543] | 0;
     h = k;
     G = 223;
    } while (0);
    do if ((G | 0) == 223) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
     Ba[c[14188 >> 2] & 7](14152, I, 1) | 0;
     break;
    } else {
     c[3543] = l + 1;
     a[l >> 0] = 10;
     break;
    } while (0);
    G = 177;
   } else G = 146;
  }
 } while (0);
 do if ((G | 0) == 146) {
  n : do if (!0) {
   h = 16252;
   G = 149;
  } else {
   h = 16252;
   j = 16252;
   while (1) {
    if (!(a[h >> 0] | 0)) {
     h = j;
     break n;
    }
    h = h + 1 | 0;
    j = h;
    if (!(j & 3)) {
     G = 149;
     break;
    }
   }
  } while (0);
  if ((G | 0) == 149) {
   while (1) {
    j = c[h >> 2] | 0;
    if (!((j & -2139062144 ^ -2139062144) & j + -16843009)) h = h + 4 | 0; else break;
   }
   if ((j & 255) << 24 >> 24) do h = h + 1 | 0; while ((a[h >> 0] | 0) != 0);
  }
  k = h - 16252 | 0;
  h = c[3542] | 0;
  do if (!h) {
   h = a[14226] | 0;
   a[14226] = h + 255 | h;
   h = c[3538] | 0;
   if (!(h & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    j = c[3549] | 0;
    c[3545] = j;
    c[3543] = j;
    h = j + (c[3550] | 0) | 0;
    c[3542] = h;
    G = 159;
    break;
   } else {
    c[3538] = h | 32;
    h = 0;
    G = 162;
    break;
   }
  } else {
   j = c[3543] | 0;
   G = 159;
  } while (0);
  do if ((G | 0) == 159) if ((h - j | 0) >>> 0 < k >>> 0) {
   h = Ba[c[14188 >> 2] & 7](14152, 16252, k) | 0;
   G = 162;
   break;
  } else {
   bc(j | 0, 16252, k | 0) | 0;
   c[3543] = (c[3543] | 0) + k;
   break;
  } while (0);
  if ((G | 0) == 162) if ((h | 0) != (k | 0)) if ((((h >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) {
   G = 177;
   break;
  }
  k = a[14227] | 0;
  if (k << 24 >> 24 == 10) j = c[3542] | 0; else {
   h = c[3543] | 0;
   j = c[3542] | 0;
   if (h >>> 0 < j >>> 0) {
    c[3543] = h + 1;
    a[h >> 0] = 10;
    G = 177;
    break;
   }
  }
  a[I >> 0] = 10;
  do if (!j) {
   k = b[7113] | 0;
   h = (k & 65535) << 24 >> 24;
   a[14226] = h + 255 | h;
   h = c[3538] | 0;
   if (!(h & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    l = c[3549] | 0;
    c[3545] = l;
    c[3543] = l;
    j = l + (c[3550] | 0) | 0;
    c[3542] = j;
    h = (k & 65535) >>> 8 & 255;
    G = 173;
    break;
   } else {
    c[3538] = h | 32;
    break;
   }
  } else {
   l = c[3543] | 0;
   h = k;
   G = 173;
  } while (0);
  do if ((G | 0) == 173) if (l >>> 0 >= j >>> 0 | h << 24 >> 24 == 10) {
   Ba[c[14188 >> 2] & 7](14152, I, 1) | 0;
   break;
  } else {
   c[3543] = l + 1;
   a[l >> 0] = 10;
   break;
  } while (0);
  G = 177;
 } while (0);
 if ((G | 0) == 177) Ta(c[5122] | 0) | 0;
 c[H >> 2] = g;
 j = ya(10, H | 0) | 0;
 if (j >>> 0 <= 4294963200) {
  I = 1;
  i = J;
  return I | 0;
 }
 if (!(c[5123] | 0)) h = 20536; else h = c[(ec() | 0) + 64 >> 2] | 0;
 c[h >> 2] = 0 - j;
 I = 1;
 i = J;
 return I | 0;
}

function Qb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 D = i;
 i = i + 16 | 0;
 p = D;
 do if (a >>> 0 < 245) {
  o = a >>> 0 < 11 ? 16 : a + 11 & -8;
  a = o >>> 3;
  t = c[5135] | 0;
  b = t >>> a;
  if (b & 3 | 0) {
   b = (b & 1 ^ 1) + a | 0;
   d = 20580 + (b << 1 << 2) | 0;
   e = d + 8 | 0;
   f = c[e >> 2] | 0;
   g = f + 8 | 0;
   h = c[g >> 2] | 0;
   do if ((d | 0) == (h | 0)) c[5135] = t & ~(1 << b); else {
    if (h >>> 0 < (c[5139] | 0) >>> 0) ma();
    a = h + 12 | 0;
    if ((c[a >> 2] | 0) == (f | 0)) {
     c[a >> 2] = d;
     c[e >> 2] = h;
     break;
    } else ma();
   } while (0);
   C = b << 3;
   c[f + 4 >> 2] = C | 3;
   C = f + C + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
   C = g;
   i = D;
   return C | 0;
  }
  s = c[5137] | 0;
  if (o >>> 0 > s >>> 0) {
   if (b | 0) {
    j = 2 << a;
    b = b << a & (j | 0 - j);
    b = (b & 0 - b) + -1 | 0;
    j = b >>> 12 & 16;
    b = b >>> j;
    e = b >>> 5 & 8;
    b = b >>> e;
    g = b >>> 2 & 4;
    b = b >>> g;
    d = b >>> 1 & 2;
    b = b >>> d;
    a = b >>> 1 & 1;
    a = (e | j | g | d | a) + (b >>> a) | 0;
    b = 20580 + (a << 1 << 2) | 0;
    d = b + 8 | 0;
    g = c[d >> 2] | 0;
    j = g + 8 | 0;
    e = c[j >> 2] | 0;
    do if ((b | 0) == (e | 0)) {
     k = t & ~(1 << a);
     c[5135] = k;
    } else {
     if (e >>> 0 < (c[5139] | 0) >>> 0) ma();
     f = e + 12 | 0;
     if ((c[f >> 2] | 0) == (g | 0)) {
      c[f >> 2] = b;
      c[d >> 2] = e;
      k = t;
      break;
     } else ma();
    } while (0);
    h = (a << 3) - o | 0;
    c[g + 4 >> 2] = o | 3;
    e = g + o | 0;
    c[e + 4 >> 2] = h | 1;
    c[e + h >> 2] = h;
    if (s | 0) {
     f = c[5140] | 0;
     a = s >>> 3;
     d = 20580 + (a << 1 << 2) | 0;
     a = 1 << a;
     if (!(k & a)) {
      c[5135] = k | a;
      l = d;
      m = d + 8 | 0;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
       l = b;
       m = a;
      }
     }
     c[m >> 2] = f;
     c[l + 12 >> 2] = f;
     c[f + 8 >> 2] = l;
     c[f + 12 >> 2] = d;
    }
    c[5137] = h;
    c[5140] = e;
    C = j;
    i = D;
    return C | 0;
   }
   j = c[5136] | 0;
   if (j) {
    b = (j & 0 - j) + -1 | 0;
    B = b >>> 12 & 16;
    b = b >>> B;
    A = b >>> 5 & 8;
    b = b >>> A;
    C = b >>> 2 & 4;
    b = b >>> C;
    k = b >>> 1 & 2;
    b = b >>> k;
    l = b >>> 1 & 1;
    l = c[20844 + ((A | B | C | k | l) + (b >>> l) << 2) >> 2] | 0;
    b = l;
    k = l;
    l = (c[l + 4 >> 2] & -8) - o | 0;
    while (1) {
     a = c[b + 16 >> 2] | 0;
     if (!a) {
      a = c[b + 20 >> 2] | 0;
      if (!a) break;
     }
     C = (c[a + 4 >> 2] & -8) - o | 0;
     B = C >>> 0 < l >>> 0;
     b = a;
     k = B ? a : k;
     l = B ? C : l;
    }
    f = c[5139] | 0;
    if (k >>> 0 < f >>> 0) ma();
    h = k + o | 0;
    if (k >>> 0 >= h >>> 0) ma();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       n = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) ma(); else {
      c[b >> 2] = 0;
      n = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ma();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ma();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      n = d;
      break;
     } else ma();
    } while (0);
    do if (g | 0) {
     a = c[k + 28 >> 2] | 0;
     b = 20844 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = n;
      if (!n) {
       c[5136] = j & ~(1 << a);
       break;
      }
     } else {
      if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
      if (!n) break;
     }
     b = c[5139] | 0;
     if (n >>> 0 < b >>> 0) ma();
     c[n + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ma(); else {
      c[n + 16 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (a | 0) if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
      c[n + 20 >> 2] = a;
      c[a + 24 >> 2] = n;
      break;
     }
    } while (0);
    if (l >>> 0 < 16) {
     C = l + o | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = o | 3;
     c[h + 4 >> 2] = l | 1;
     c[h + l >> 2] = l;
     if (s | 0) {
      e = c[5140] | 0;
      a = s >>> 3;
      d = 20580 + (a << 1 << 2) | 0;
      a = 1 << a;
      if (!(a & t)) {
       c[5135] = a | t;
       q = d;
       r = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
        q = b;
        r = a;
       }
      }
      c[r >> 2] = e;
      c[q + 12 >> 2] = e;
      c[e + 8 >> 2] = q;
      c[e + 12 >> 2] = d;
     }
     c[5137] = l;
     c[5140] = h;
    }
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } else if (a >>> 0 > 4294967231) o = -1; else {
  a = a + 11 | 0;
  o = a & -8;
  l = c[5136] | 0;
  if (l) {
   d = 0 - o | 0;
   a = a >>> 8;
   if (!a) h = 0; else if (o >>> 0 > 16777215) h = 31; else {
    r = (a + 1048320 | 0) >>> 16 & 8;
    w = a << r;
    q = (w + 520192 | 0) >>> 16 & 4;
    w = w << q;
    h = (w + 245760 | 0) >>> 16 & 2;
    h = 14 - (q | r | h) + (w << h >>> 15) | 0;
    h = o >>> (h + 7 | 0) & 1 | h << 1;
   }
   a = c[20844 + (h << 2) >> 2] | 0;
   a : do if (!a) {
    b = 0;
    e = 0;
    w = 86;
   } else {
    e = 0;
    g = a;
    f = o << ((h | 0) == 31 ? 0 : 25 - (h >>> 1) | 0);
    b = 0;
    while (1) {
     a = (c[g + 4 >> 2] & -8) - o | 0;
     if (a >>> 0 < d >>> 0) if (!a) {
      a = g;
      d = 0;
      b = g;
      w = 90;
      break a;
     } else {
      e = g;
      d = a;
     }
     a = c[g + 20 >> 2] | 0;
     g = c[g + 16 + (f >>> 31 << 2) >> 2] | 0;
     b = (a | 0) == 0 | (a | 0) == (g | 0) ? b : a;
     a = (g | 0) == 0;
     if (a) {
      w = 86;
      break;
     } else f = f << (a & 1 ^ 1);
    }
   } while (0);
   if ((w | 0) == 86) {
    if ((b | 0) == 0 & (e | 0) == 0) {
     a = 2 << h;
     a = (a | 0 - a) & l;
     if (!a) break;
     r = (a & 0 - a) + -1 | 0;
     m = r >>> 12 & 16;
     r = r >>> m;
     k = r >>> 5 & 8;
     r = r >>> k;
     n = r >>> 2 & 4;
     r = r >>> n;
     q = r >>> 1 & 2;
     r = r >>> q;
     b = r >>> 1 & 1;
     b = c[20844 + ((k | m | n | q | b) + (r >>> b) << 2) >> 2] | 0;
    }
    if (!b) {
     k = e;
     h = d;
    } else {
     a = e;
     w = 90;
    }
   }
   if ((w | 0) == 90) while (1) {
    w = 0;
    r = (c[b + 4 >> 2] & -8) - o | 0;
    e = r >>> 0 < d >>> 0;
    d = e ? r : d;
    a = e ? b : a;
    e = c[b + 16 >> 2] | 0;
    if (e | 0) {
     b = e;
     w = 90;
     continue;
    }
    b = c[b + 20 >> 2] | 0;
    if (!b) {
     k = a;
     h = d;
     break;
    } else w = 90;
   }
   if (k) if (h >>> 0 < ((c[5137] | 0) - o | 0) >>> 0) {
    f = c[5139] | 0;
    if (k >>> 0 < f >>> 0) ma();
    j = k + o | 0;
    if (k >>> 0 >= j >>> 0) ma();
    g = c[k + 24 >> 2] | 0;
    d = c[k + 12 >> 2] | 0;
    do if ((d | 0) == (k | 0)) {
     b = k + 20 | 0;
     a = c[b >> 2] | 0;
     if (!a) {
      b = k + 16 | 0;
      a = c[b >> 2] | 0;
      if (!a) {
       s = 0;
       break;
      }
     }
     while (1) {
      d = a + 20 | 0;
      e = c[d >> 2] | 0;
      if (e | 0) {
       a = e;
       b = d;
       continue;
      }
      d = a + 16 | 0;
      e = c[d >> 2] | 0;
      if (!e) break; else {
       a = e;
       b = d;
      }
     }
     if (b >>> 0 < f >>> 0) ma(); else {
      c[b >> 2] = 0;
      s = a;
      break;
     }
    } else {
     e = c[k + 8 >> 2] | 0;
     if (e >>> 0 < f >>> 0) ma();
     a = e + 12 | 0;
     if ((c[a >> 2] | 0) != (k | 0)) ma();
     b = d + 8 | 0;
     if ((c[b >> 2] | 0) == (k | 0)) {
      c[a >> 2] = d;
      c[b >> 2] = e;
      s = d;
      break;
     } else ma();
    } while (0);
    do if (!g) t = l; else {
     a = c[k + 28 >> 2] | 0;
     b = 20844 + (a << 2) | 0;
     if ((k | 0) == (c[b >> 2] | 0)) {
      c[b >> 2] = s;
      if (!s) {
       t = l & ~(1 << a);
       c[5136] = t;
       break;
      }
     } else {
      if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
      a = g + 16 | 0;
      if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = s; else c[g + 20 >> 2] = s;
      if (!s) {
       t = l;
       break;
      }
     }
     b = c[5139] | 0;
     if (s >>> 0 < b >>> 0) ma();
     c[s + 24 >> 2] = g;
     a = c[k + 16 >> 2] | 0;
     do if (a | 0) if (a >>> 0 < b >>> 0) ma(); else {
      c[s + 16 >> 2] = a;
      c[a + 24 >> 2] = s;
      break;
     } while (0);
     a = c[k + 20 >> 2] | 0;
     if (!a) t = l; else if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
      c[s + 20 >> 2] = a;
      c[a + 24 >> 2] = s;
      t = l;
      break;
     }
    } while (0);
    do if (h >>> 0 < 16) {
     C = h + o | 0;
     c[k + 4 >> 2] = C | 3;
     C = k + C + 4 | 0;
     c[C >> 2] = c[C >> 2] | 1;
    } else {
     c[k + 4 >> 2] = o | 3;
     c[j + 4 >> 2] = h | 1;
     c[j + h >> 2] = h;
     a = h >>> 3;
     if (h >>> 0 < 256) {
      d = 20580 + (a << 1 << 2) | 0;
      b = c[5135] | 0;
      a = 1 << a;
      if (!(b & a)) {
       c[5135] = b | a;
       u = d;
       v = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
        u = b;
        v = a;
       }
      }
      c[v >> 2] = j;
      c[u + 12 >> 2] = j;
      c[j + 8 >> 2] = u;
      c[j + 12 >> 2] = d;
      break;
     }
     a = h >>> 8;
     if (!a) a = 0; else if (h >>> 0 > 16777215) a = 31; else {
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      a = (C + 245760 | 0) >>> 16 & 2;
      a = 14 - (A | B | a) + (C << a >>> 15) | 0;
      a = h >>> (a + 7 | 0) & 1 | a << 1;
     }
     d = 20844 + (a << 2) | 0;
     c[j + 28 >> 2] = a;
     b = j + 16 | 0;
     c[b + 4 >> 2] = 0;
     c[b >> 2] = 0;
     b = 1 << a;
     if (!(b & t)) {
      c[5136] = b | t;
      c[d >> 2] = j;
      c[j + 24 >> 2] = d;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     }
     b = h << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
     e = c[d >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (h | 0)) {
       w = 148;
       break;
      }
      d = e + 16 + (b >>> 31 << 2) | 0;
      a = c[d >> 2] | 0;
      if (!a) {
       w = 145;
       break;
      } else {
       b = b << 1;
       e = a;
      }
     }
     if ((w | 0) == 145) if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
      c[d >> 2] = j;
      c[j + 24 >> 2] = e;
      c[j + 12 >> 2] = j;
      c[j + 8 >> 2] = j;
      break;
     } else if ((w | 0) == 148) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[5139] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = j;
       c[a >> 2] = j;
       c[j + 8 >> 2] = b;
       c[j + 12 >> 2] = e;
       c[j + 24 >> 2] = 0;
       break;
      } else ma();
     }
    } while (0);
    C = k + 8 | 0;
    i = D;
    return C | 0;
   }
  }
 } while (0);
 d = c[5137] | 0;
 if (d >>> 0 >= o >>> 0) {
  a = d - o | 0;
  b = c[5140] | 0;
  if (a >>> 0 > 15) {
   C = b + o | 0;
   c[5140] = C;
   c[5137] = a;
   c[C + 4 >> 2] = a | 1;
   c[C + a >> 2] = a;
   c[b + 4 >> 2] = o | 3;
  } else {
   c[5137] = 0;
   c[5140] = 0;
   c[b + 4 >> 2] = d | 3;
   C = b + d + 4 | 0;
   c[C >> 2] = c[C >> 2] | 1;
  }
  C = b + 8 | 0;
  i = D;
  return C | 0;
 }
 h = c[5138] | 0;
 if (h >>> 0 > o >>> 0) {
  A = h - o | 0;
  c[5138] = A;
  C = c[5141] | 0;
  B = C + o | 0;
  c[5141] = B;
  c[B + 4 >> 2] = A | 1;
  c[C + 4 >> 2] = o | 3;
  C = C + 8 | 0;
  i = D;
  return C | 0;
 }
 if (!(c[5253] | 0)) {
  c[5255] = 4096;
  c[5254] = 4096;
  c[5256] = -1;
  c[5257] = -1;
  c[5258] = 0;
  c[5246] = 0;
  a = p & -16 ^ 1431655768;
  c[p >> 2] = a;
  c[5253] = a;
  a = 4096;
 } else a = c[5255] | 0;
 j = o + 48 | 0;
 k = o + 47 | 0;
 g = a + k | 0;
 e = 0 - a | 0;
 l = g & e;
 if (l >>> 0 <= o >>> 0) {
  C = 0;
  i = D;
  return C | 0;
 }
 a = c[5245] | 0;
 if (a | 0) {
  u = c[5243] | 0;
  v = u + l | 0;
  if (v >>> 0 <= u >>> 0 | v >>> 0 > a >>> 0) {
   C = 0;
   i = D;
   return C | 0;
  }
 }
 b : do if (!(c[5246] & 4)) {
  b = c[5141] | 0;
  c : do if (!b) w = 172; else {
   d = 20988;
   while (1) {
    a = c[d >> 2] | 0;
    if (a >>> 0 <= b >>> 0) {
     f = d + 4 | 0;
     if ((a + (c[f >> 2] | 0) | 0) >>> 0 > b >>> 0) break;
    }
    a = c[d + 8 >> 2] | 0;
    if (!a) {
     w = 172;
     break c;
    } else d = a;
   }
   a = g - h & e;
   if (a >>> 0 < 2147483647) {
    b = ac(a | 0) | 0;
    if ((b | 0) == ((c[d >> 2] | 0) + (c[f >> 2] | 0) | 0)) {
     if ((b | 0) != (-1 | 0)) {
      h = a;
      g = b;
      w = 190;
      break b;
     }
    } else {
     e = b;
     w = 180;
    }
   }
  } while (0);
  do if ((w | 0) == 172) {
   f = ac(0) | 0;
   if ((f | 0) != (-1 | 0)) {
    a = f;
    b = c[5254] | 0;
    d = b + -1 | 0;
    a = ((d & a | 0) == 0 ? 0 : (d + a & 0 - b) - a | 0) + l | 0;
    b = c[5243] | 0;
    d = a + b | 0;
    if (a >>> 0 > o >>> 0 & a >>> 0 < 2147483647) {
     e = c[5245] | 0;
     if (e | 0) if (d >>> 0 <= b >>> 0 | d >>> 0 > e >>> 0) break;
     b = ac(a | 0) | 0;
     if ((b | 0) == (f | 0)) {
      h = a;
      g = f;
      w = 190;
      break b;
     } else {
      e = b;
      w = 180;
     }
    }
   }
  } while (0);
  d : do if ((w | 0) == 180) {
   d = 0 - a | 0;
   do if (j >>> 0 > a >>> 0 & (a >>> 0 < 2147483647 & (e | 0) != (-1 | 0))) {
    b = c[5255] | 0;
    b = k - a + b & 0 - b;
    if (b >>> 0 < 2147483647) if ((ac(b | 0) | 0) == (-1 | 0)) {
     ac(d | 0) | 0;
     break d;
    } else {
     a = b + a | 0;
     break;
    }
   } while (0);
   if ((e | 0) != (-1 | 0)) {
    h = a;
    g = e;
    w = 190;
    break b;
   }
  } while (0);
  c[5246] = c[5246] | 4;
  w = 187;
 } else w = 187; while (0);
 if ((w | 0) == 187) if (l >>> 0 < 2147483647) {
  b = ac(l | 0) | 0;
  a = ac(0) | 0;
  if (b >>> 0 < a >>> 0 & ((b | 0) != (-1 | 0) & (a | 0) != (-1 | 0))) {
   a = a - b | 0;
   if (a >>> 0 > (o + 40 | 0) >>> 0) {
    h = a;
    g = b;
    w = 190;
   }
  }
 }
 if ((w | 0) == 190) {
  a = (c[5243] | 0) + h | 0;
  c[5243] = a;
  if (a >>> 0 > (c[5244] | 0) >>> 0) c[5244] = a;
  l = c[5141] | 0;
  do if (!l) {
   C = c[5139] | 0;
   if ((C | 0) == 0 | g >>> 0 < C >>> 0) c[5139] = g;
   c[5247] = g;
   c[5248] = h;
   c[5250] = 0;
   c[5144] = c[5253];
   c[5143] = -1;
   a = 0;
   do {
    C = 20580 + (a << 1 << 2) | 0;
    c[C + 12 >> 2] = C;
    c[C + 8 >> 2] = C;
    a = a + 1 | 0;
   } while ((a | 0) != 32);
   C = g + 8 | 0;
   C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
   B = g + C | 0;
   C = h + -40 - C | 0;
   c[5141] = B;
   c[5138] = C;
   c[B + 4 >> 2] = C | 1;
   c[B + C + 4 >> 2] = 40;
   c[5142] = c[5257];
  } else {
   a = 20988;
   do {
    b = c[a >> 2] | 0;
    d = a + 4 | 0;
    e = c[d >> 2] | 0;
    if ((g | 0) == (b + e | 0)) {
     w = 200;
     break;
    }
    a = c[a + 8 >> 2] | 0;
   } while ((a | 0) != 0);
   if ((w | 0) == 200) if (!(c[a + 12 >> 2] & 8)) if (l >>> 0 < g >>> 0 & l >>> 0 >= b >>> 0) {
    c[d >> 2] = e + h;
    C = l + 8 | 0;
    C = (C & 7 | 0) == 0 ? 0 : 0 - C & 7;
    B = l + C | 0;
    C = (c[5138] | 0) + (h - C) | 0;
    c[5141] = B;
    c[5138] = C;
    c[B + 4 >> 2] = C | 1;
    c[B + C + 4 >> 2] = 40;
    c[5142] = c[5257];
    break;
   }
   a = c[5139] | 0;
   if (g >>> 0 < a >>> 0) {
    c[5139] = g;
    j = g;
   } else j = a;
   b = g + h | 0;
   a = 20988;
   while (1) {
    if ((c[a >> 2] | 0) == (b | 0)) {
     w = 208;
     break;
    }
    a = c[a + 8 >> 2] | 0;
    if (!a) {
     b = 20988;
     break;
    }
   }
   if ((w | 0) == 208) if (!(c[a + 12 >> 2] & 8)) {
    c[a >> 2] = g;
    n = a + 4 | 0;
    c[n >> 2] = (c[n >> 2] | 0) + h;
    n = g + 8 | 0;
    n = g + ((n & 7 | 0) == 0 ? 0 : 0 - n & 7) | 0;
    a = b + 8 | 0;
    a = b + ((a & 7 | 0) == 0 ? 0 : 0 - a & 7) | 0;
    m = n + o | 0;
    k = a - n - o | 0;
    c[n + 4 >> 2] = o | 3;
    do if ((a | 0) == (l | 0)) {
     C = (c[5138] | 0) + k | 0;
     c[5138] = C;
     c[5141] = m;
     c[m + 4 >> 2] = C | 1;
    } else {
     if ((a | 0) == (c[5140] | 0)) {
      C = (c[5137] | 0) + k | 0;
      c[5137] = C;
      c[5140] = m;
      c[m + 4 >> 2] = C | 1;
      c[m + C >> 2] = C;
      break;
     }
     b = c[a + 4 >> 2] | 0;
     if ((b & 3 | 0) == 1) {
      h = b & -8;
      f = b >>> 3;
      e : do if (b >>> 0 < 256) {
       d = c[a + 8 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       b = 20580 + (f << 1 << 2) | 0;
       do if ((d | 0) != (b | 0)) {
        if (d >>> 0 < j >>> 0) ma();
        if ((c[d + 12 >> 2] | 0) == (a | 0)) break;
        ma();
       } while (0);
       if ((e | 0) == (d | 0)) {
        c[5135] = c[5135] & ~(1 << f);
        break;
       }
       do if ((e | 0) == (b | 0)) x = e + 8 | 0; else {
        if (e >>> 0 < j >>> 0) ma();
        b = e + 8 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) {
         x = b;
         break;
        }
        ma();
       } while (0);
       c[d + 12 >> 2] = e;
       c[x >> 2] = d;
      } else {
       g = c[a + 24 >> 2] | 0;
       e = c[a + 12 >> 2] | 0;
       do if ((e | 0) == (a | 0)) {
        e = a + 16 | 0;
        d = e + 4 | 0;
        b = c[d >> 2] | 0;
        if (!b) {
         b = c[e >> 2] | 0;
         if (!b) {
          A = 0;
          break;
         } else d = e;
        }
        while (1) {
         e = b + 20 | 0;
         f = c[e >> 2] | 0;
         if (f | 0) {
          b = f;
          d = e;
          continue;
         }
         e = b + 16 | 0;
         f = c[e >> 2] | 0;
         if (!f) break; else {
          b = f;
          d = e;
         }
        }
        if (d >>> 0 < j >>> 0) ma(); else {
         c[d >> 2] = 0;
         A = b;
         break;
        }
       } else {
        f = c[a + 8 >> 2] | 0;
        if (f >>> 0 < j >>> 0) ma();
        b = f + 12 | 0;
        if ((c[b >> 2] | 0) != (a | 0)) ma();
        d = e + 8 | 0;
        if ((c[d >> 2] | 0) == (a | 0)) {
         c[b >> 2] = e;
         c[d >> 2] = f;
         A = e;
         break;
        } else ma();
       } while (0);
       if (!g) break;
       b = c[a + 28 >> 2] | 0;
       d = 20844 + (b << 2) | 0;
       do if ((a | 0) == (c[d >> 2] | 0)) {
        c[d >> 2] = A;
        if (A | 0) break;
        c[5136] = c[5136] & ~(1 << b);
        break e;
       } else {
        if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
        b = g + 16 | 0;
        if ((c[b >> 2] | 0) == (a | 0)) c[b >> 2] = A; else c[g + 20 >> 2] = A;
        if (!A) break e;
       } while (0);
       e = c[5139] | 0;
       if (A >>> 0 < e >>> 0) ma();
       c[A + 24 >> 2] = g;
       b = a + 16 | 0;
       d = c[b >> 2] | 0;
       do if (d | 0) if (d >>> 0 < e >>> 0) ma(); else {
        c[A + 16 >> 2] = d;
        c[d + 24 >> 2] = A;
        break;
       } while (0);
       b = c[b + 4 >> 2] | 0;
       if (!b) break;
       if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
        c[A + 20 >> 2] = b;
        c[b + 24 >> 2] = A;
        break;
       }
      } while (0);
      a = a + h | 0;
      f = h + k | 0;
     } else f = k;
     a = a + 4 | 0;
     c[a >> 2] = c[a >> 2] & -2;
     c[m + 4 >> 2] = f | 1;
     c[m + f >> 2] = f;
     a = f >>> 3;
     if (f >>> 0 < 256) {
      d = 20580 + (a << 1 << 2) | 0;
      b = c[5135] | 0;
      a = 1 << a;
      do if (!(b & a)) {
       c[5135] = b | a;
       B = d;
       C = d + 8 | 0;
      } else {
       a = d + 8 | 0;
       b = c[a >> 2] | 0;
       if (b >>> 0 >= (c[5139] | 0) >>> 0) {
        B = b;
        C = a;
        break;
       }
       ma();
      } while (0);
      c[C >> 2] = m;
      c[B + 12 >> 2] = m;
      c[m + 8 >> 2] = B;
      c[m + 12 >> 2] = d;
      break;
     }
     a = f >>> 8;
     do if (!a) a = 0; else {
      if (f >>> 0 > 16777215) {
       a = 31;
       break;
      }
      B = (a + 1048320 | 0) >>> 16 & 8;
      C = a << B;
      A = (C + 520192 | 0) >>> 16 & 4;
      C = C << A;
      a = (C + 245760 | 0) >>> 16 & 2;
      a = 14 - (A | B | a) + (C << a >>> 15) | 0;
      a = f >>> (a + 7 | 0) & 1 | a << 1;
     } while (0);
     e = 20844 + (a << 2) | 0;
     c[m + 28 >> 2] = a;
     b = m + 16 | 0;
     c[b + 4 >> 2] = 0;
     c[b >> 2] = 0;
     b = c[5136] | 0;
     d = 1 << a;
     if (!(b & d)) {
      c[5136] = b | d;
      c[e >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     }
     b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
     e = c[e >> 2] | 0;
     while (1) {
      if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
       w = 278;
       break;
      }
      d = e + 16 + (b >>> 31 << 2) | 0;
      a = c[d >> 2] | 0;
      if (!a) {
       w = 275;
       break;
      } else {
       b = b << 1;
       e = a;
      }
     }
     if ((w | 0) == 275) if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
      c[d >> 2] = m;
      c[m + 24 >> 2] = e;
      c[m + 12 >> 2] = m;
      c[m + 8 >> 2] = m;
      break;
     } else if ((w | 0) == 278) {
      a = e + 8 | 0;
      b = c[a >> 2] | 0;
      C = c[5139] | 0;
      if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
       c[b + 12 >> 2] = m;
       c[a >> 2] = m;
       c[m + 8 >> 2] = b;
       c[m + 12 >> 2] = e;
       c[m + 24 >> 2] = 0;
       break;
      } else ma();
     }
    } while (0);
    C = n + 8 | 0;
    i = D;
    return C | 0;
   } else b = 20988;
   while (1) {
    a = c[b >> 2] | 0;
    if (a >>> 0 <= l >>> 0) {
     d = a + (c[b + 4 >> 2] | 0) | 0;
     if (d >>> 0 > l >>> 0) break;
    }
    b = c[b + 8 >> 2] | 0;
   }
   f = d + -47 | 0;
   b = f + 8 | 0;
   b = f + ((b & 7 | 0) == 0 ? 0 : 0 - b & 7) | 0;
   f = l + 16 | 0;
   b = b >>> 0 < f >>> 0 ? l : b;
   a = b + 8 | 0;
   e = g + 8 | 0;
   e = (e & 7 | 0) == 0 ? 0 : 0 - e & 7;
   C = g + e | 0;
   e = h + -40 - e | 0;
   c[5141] = C;
   c[5138] = e;
   c[C + 4 >> 2] = e | 1;
   c[C + e + 4 >> 2] = 40;
   c[5142] = c[5257];
   e = b + 4 | 0;
   c[e >> 2] = 27;
   c[a >> 2] = c[5247];
   c[a + 4 >> 2] = c[5248];
   c[a + 8 >> 2] = c[5249];
   c[a + 12 >> 2] = c[5250];
   c[5247] = g;
   c[5248] = h;
   c[5250] = 0;
   c[5249] = a;
   a = b + 24 | 0;
   do {
    a = a + 4 | 0;
    c[a >> 2] = 7;
   } while ((a + 4 | 0) >>> 0 < d >>> 0);
   if ((b | 0) != (l | 0)) {
    g = b - l | 0;
    c[e >> 2] = c[e >> 2] & -2;
    c[l + 4 >> 2] = g | 1;
    c[b >> 2] = g;
    a = g >>> 3;
    if (g >>> 0 < 256) {
     d = 20580 + (a << 1 << 2) | 0;
     b = c[5135] | 0;
     a = 1 << a;
     if (!(b & a)) {
      c[5135] = b | a;
      y = d;
      z = d + 8 | 0;
     } else {
      a = d + 8 | 0;
      b = c[a >> 2] | 0;
      if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
       y = b;
       z = a;
      }
     }
     c[z >> 2] = l;
     c[y + 12 >> 2] = l;
     c[l + 8 >> 2] = y;
     c[l + 12 >> 2] = d;
     break;
    }
    a = g >>> 8;
    if (!a) d = 0; else if (g >>> 0 > 16777215) d = 31; else {
     B = (a + 1048320 | 0) >>> 16 & 8;
     C = a << B;
     A = (C + 520192 | 0) >>> 16 & 4;
     C = C << A;
     d = (C + 245760 | 0) >>> 16 & 2;
     d = 14 - (A | B | d) + (C << d >>> 15) | 0;
     d = g >>> (d + 7 | 0) & 1 | d << 1;
    }
    e = 20844 + (d << 2) | 0;
    c[l + 28 >> 2] = d;
    c[l + 20 >> 2] = 0;
    c[f >> 2] = 0;
    a = c[5136] | 0;
    b = 1 << d;
    if (!(a & b)) {
     c[5136] = a | b;
     c[e >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    }
    b = g << ((d | 0) == 31 ? 0 : 25 - (d >>> 1) | 0);
    e = c[e >> 2] | 0;
    while (1) {
     if ((c[e + 4 >> 2] & -8 | 0) == (g | 0)) {
      w = 304;
      break;
     }
     d = e + 16 + (b >>> 31 << 2) | 0;
     a = c[d >> 2] | 0;
     if (!a) {
      w = 301;
      break;
     } else {
      b = b << 1;
      e = a;
     }
    }
    if ((w | 0) == 301) if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
     c[d >> 2] = l;
     c[l + 24 >> 2] = e;
     c[l + 12 >> 2] = l;
     c[l + 8 >> 2] = l;
     break;
    } else if ((w | 0) == 304) {
     a = e + 8 | 0;
     b = c[a >> 2] | 0;
     C = c[5139] | 0;
     if (b >>> 0 >= C >>> 0 & e >>> 0 >= C >>> 0) {
      c[b + 12 >> 2] = l;
      c[a >> 2] = l;
      c[l + 8 >> 2] = b;
      c[l + 12 >> 2] = e;
      c[l + 24 >> 2] = 0;
      break;
     } else ma();
    }
   }
  } while (0);
  a = c[5138] | 0;
  if (a >>> 0 > o >>> 0) {
   A = a - o | 0;
   c[5138] = A;
   C = c[5141] | 0;
   B = C + o | 0;
   c[5141] = B;
   c[B + 4 >> 2] = A | 1;
   c[C + 4 >> 2] = o | 3;
   C = C + 8 | 0;
   i = D;
   return C | 0;
  }
 }
 if (!(c[5123] | 0)) a = 20536; else a = c[(ec() | 0) + 64 >> 2] | 0;
 c[a >> 2] = 12;
 C = 0;
 i = D;
 return C | 0;
}

function zb(e, f, g, j) {
 e = e | 0;
 f = f | 0;
 g = g | 0;
 j = j | 0;
 var k = 0, m = 0, n = 0, o = 0, p = 0, q = 0.0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0.0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, T = 0, U = 0, V = 0, W = 0, X = 0, Y = 0, Z = 0, _ = 0, $ = 0, aa = 0, ba = 0, ca = 0, da = 0, ea = 0, fa = 0, ga = 0, ha = 0, ia = 0, ja = 0;
 ja = i;
 i = i + 624 | 0;
 fa = ja + 24 | 0;
 ga = ja + 16 | 0;
 ha = ja + 588 | 0;
 Y = ja + 576 | 0;
 ia = ja;
 T = ja + 536 | 0;
 N = ja + 8 | 0;
 O = ja + 528 | 0;
 P = (e | 0) != 0;
 Q = T + 40 | 0;
 R = Q;
 T = T + 39 | 0;
 U = N + 4 | 0;
 V = ha;
 W = 0 - V | 0;
 X = Y + 12 | 0;
 Y = Y + 11 | 0;
 Z = X;
 _ = Z - V | 0;
 $ = -2 - V | 0;
 aa = Z + 2 | 0;
 ba = fa + 288 | 0;
 ca = ha + 9 | 0;
 da = ca;
 ea = ha + 8 | 0;
 m = 0;
 k = 0;
 r = 0;
 x = 17121;
 a : while (1) {
  do if ((k | 0) > -1) {
   if ((m | 0) <= (2147483647 - k | 0)) {
    k = m + k | 0;
    break;
   }
   if (!(c[5123] | 0)) k = 20536; else k = c[(ec() | 0) + 64 >> 2] | 0;
   c[k >> 2] = 75;
   k = -1;
  } while (0);
  m = a[x >> 0] | 0;
  if (!(m << 24 >> 24)) {
   M = 253;
   break;
  } else n = x;
  b : while (1) {
   switch (m << 24 >> 24) {
   case 37:
    {
     m = n;
     M = 11;
     break b;
    }
   case 0:
    {
     m = n;
     break b;
    }
   default:
    {}
   }
   m = n + 1 | 0;
   n = m;
   m = a[m >> 0] | 0;
  }
  c : do if ((M | 0) == 11) while (1) {
   M = 0;
   if ((a[n + 1 >> 0] | 0) != 37) break c;
   m = m + 1 | 0;
   n = n + 2 | 0;
   if ((a[n >> 0] | 0) == 37) M = 11; else break;
  } while (0);
  m = m - x | 0;
  if (P) if (!(c[e >> 2] & 32)) Ab(x, m, e) | 0;
  if (m | 0) {
   x = n;
   continue;
  }
  p = n + 1 | 0;
  o = a[p >> 0] | 0;
  m = (o << 24 >> 24) + -48 | 0;
  if (m >>> 0 < 10) {
   t = (a[n + 2 >> 0] | 0) == 36;
   p = t ? n + 3 | 0 : p;
   u = t ? m : -1;
   t = t ? 1 : r;
   m = a[p >> 0] | 0;
  } else {
   u = -1;
   t = r;
   m = o;
  }
  n = (m << 24 >> 24) + -32 | 0;
  d : do if (n >>> 0 < 32) {
   o = 0;
   do {
    if (!(1 << n & 75913)) break d;
    o = 1 << (m << 24 >> 24) + -32 | o;
    p = p + 1 | 0;
    m = a[p >> 0] | 0;
    n = (m << 24 >> 24) + -32 | 0;
   } while (n >>> 0 < 32);
  } else o = 0; while (0);
  do if (m << 24 >> 24 == 42) {
   s = p + 1 | 0;
   m = a[s >> 0] | 0;
   n = (m << 24 >> 24) + -48 | 0;
   if (n >>> 0 < 10) if ((a[p + 2 >> 0] | 0) == 36) {
    c[j + (n << 2) >> 2] = 10;
    m = c[g + ((a[s >> 0] | 0) + -48 << 3) >> 2] | 0;
    n = 1;
    s = p + 3 | 0;
   } else M = 26; else M = 26;
   if ((M | 0) == 26) {
    M = 0;
    if (t | 0) {
     k = -1;
     break a;
    }
    if (!P) {
     r = 0;
     L = 0;
     p = s;
     break;
    }
    n = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
    m = c[n >> 2] | 0;
    c[f >> 2] = n + 4;
    n = 0;
   }
   L = (m | 0) < 0;
   r = L ? 0 - m | 0 : m;
   o = L ? o | 8192 : o;
   L = n;
   p = s;
   m = a[s >> 0] | 0;
  } else {
   n = (m << 24 >> 24) + -48 | 0;
   if (n >>> 0 < 10) {
    r = 0;
    do {
     r = (r * 10 | 0) + n | 0;
     p = p + 1 | 0;
     m = a[p >> 0] | 0;
     n = (m << 24 >> 24) + -48 | 0;
    } while (n >>> 0 < 10);
    if ((r | 0) < 0) {
     k = -1;
     break a;
    } else L = t;
   } else {
    r = 0;
    L = t;
   }
  } while (0);
  e : do if (m << 24 >> 24 == 46) {
   m = p + 1 | 0;
   n = a[m >> 0] | 0;
   if (n << 24 >> 24 != 42) {
    p = (n << 24 >> 24) + -48 | 0;
    if (p >>> 0 < 10) n = 0; else {
     t = 0;
     break;
    }
    while (1) {
     n = (n * 10 | 0) + p | 0;
     m = m + 1 | 0;
     p = (a[m >> 0] | 0) + -48 | 0;
     if (p >>> 0 >= 10) {
      t = n;
      break e;
     }
    }
   }
   m = p + 2 | 0;
   n = (a[m >> 0] | 0) + -48 | 0;
   if (n >>> 0 < 10) if ((a[p + 3 >> 0] | 0) == 36) {
    c[j + (n << 2) >> 2] = 10;
    t = c[g + ((a[m >> 0] | 0) + -48 << 3) >> 2] | 0;
    m = p + 4 | 0;
    break;
   }
   if (L | 0) {
    k = -1;
    break a;
   }
   if (P) {
    K = (c[f >> 2] | 0) + (4 - 1) & ~(4 - 1);
    t = c[K >> 2] | 0;
    c[f >> 2] = K + 4;
   } else t = 0;
  } else {
   t = -1;
   m = p;
  } while (0);
  v = 0;
  while (1) {
   n = (a[m >> 0] | 0) + -65 | 0;
   if (n >>> 0 > 57) {
    k = -1;
    break a;
   }
   K = m + 1 | 0;
   n = a[18053 + (v * 58 | 0) + n >> 0] | 0;
   p = n & 255;
   if ((p + -1 | 0) >>> 0 < 8) {
    v = p;
    m = K;
   } else break;
  }
  if (!(n << 24 >> 24)) {
   k = -1;
   break;
  }
  s = (u | 0) > -1;
  do if (n << 24 >> 24 == 19) if (s) {
   k = -1;
   break a;
  } else M = 53; else {
   if (s) {
    c[j + (u << 2) >> 2] = p;
    I = g + (u << 3) | 0;
    J = c[I + 4 >> 2] | 0;
    M = ia;
    c[M >> 2] = c[I >> 2];
    c[M + 4 >> 2] = J;
    M = 53;
    break;
   }
   if (!P) {
    k = 0;
    break a;
   }
   Bb(ia, p, f);
  } while (0);
  if ((M | 0) == 53) {
   M = 0;
   if (!P) {
    m = 0;
    r = L;
    x = K;
    continue;
   }
  }
  G = a[m >> 0] | 0;
  G = (v | 0) != 0 & (G & 15 | 0) == 3 ? G & -33 : G;
  y = o & -65537;
  u = (o & 8192 | 0) == 0 ? o : y;
  f : do switch (G | 0) {
  case 110:
   switch ((v & 255) << 24 >> 24) {
   case 0:
    {
     c[c[ia >> 2] >> 2] = k;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 1:
    {
     c[c[ia >> 2] >> 2] = k;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 2:
    {
     m = c[ia >> 2] | 0;
     c[m >> 2] = k;
     c[m + 4 >> 2] = ((k | 0) < 0) << 31 >> 31;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 3:
    {
     b[c[ia >> 2] >> 1] = k;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 4:
    {
     a[c[ia >> 2] >> 0] = k;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 6:
    {
     c[c[ia >> 2] >> 2] = k;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   case 7:
    {
     m = c[ia >> 2] | 0;
     c[m >> 2] = k;
     c[m + 4 >> 2] = ((k | 0) < 0) << 31 >> 31;
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   default:
    {
     m = 0;
     r = L;
     x = K;
     continue a;
    }
   }
  case 112:
   {
    v = 120;
    t = t >>> 0 > 8 ? t : 8;
    n = u | 8;
    M = 65;
    break;
   }
  case 88:
  case 120:
   {
    v = G;
    n = u;
    M = 65;
    break;
   }
  case 111:
   {
    o = ia;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((n | 0) == 0 & (o | 0) == 0) m = Q; else {
     m = Q;
     do {
      m = m + -1 | 0;
      a[m >> 0] = n & 7 | 48;
      n = Yb(n | 0, o | 0, 3) | 0;
      o = D;
     } while (!((n | 0) == 0 & (o | 0) == 0));
    }
    if (!(u & 8)) {
     p = 0;
     s = 18533;
     n = u;
     M = 78;
    } else {
     n = R - m | 0;
     p = 0;
     s = 18533;
     t = (t | 0) > (n | 0) ? t : n + 1 | 0;
     n = u;
     M = 78;
    }
    break;
   }
  case 105:
  case 100:
   {
    o = ia;
    n = c[o >> 2] | 0;
    o = c[o + 4 >> 2] | 0;
    if ((o | 0) < 0) {
     n = Vb(0, 0, n | 0, o | 0) | 0;
     m = D;
     p = ia;
     c[p >> 2] = n;
     c[p + 4 >> 2] = m;
     p = 1;
     s = 18533;
     M = 77;
     break f;
    }
    m = u & 1;
    if (!(u & 2048)) {
     p = m;
     s = (m | 0) == 0 ? 18533 : 18535;
     m = o;
     M = 77;
    } else {
     p = 1;
     s = 18534;
     m = o;
     M = 77;
    }
    break;
   }
  case 117:
   {
    m = ia;
    p = 0;
    s = 18533;
    n = c[m >> 2] | 0;
    m = c[m + 4 >> 2] | 0;
    M = 77;
    break;
   }
  case 99:
   {
    a[T >> 0] = c[ia >> 2];
    x = T;
    v = 0;
    s = 18533;
    n = Q;
    t = 1;
    u = y;
    break;
   }
  case 109:
   {
    if (!(c[5123] | 0)) m = 20536; else m = c[(ec() | 0) + 64 >> 2] | 0;
    o = c[m >> 2] | 0;
    n = 0;
    while (1) {
     if ((d[18581 + n >> 0] | 0) == (o | 0)) {
      M = 84;
      break;
     }
     m = n + 1 | 0;
     if ((m | 0) == 87) {
      m = 18669;
      n = 87;
      break;
     } else n = m;
    }
    if ((M | 0) == 84) if (!n) {
     m = 18669;
     M = 91;
     break f;
    } else m = 18669;
    do {
     do {
      M = m;
      m = m + 1 | 0;
     } while ((a[M >> 0] | 0) != 0);
     n = n + -1 | 0;
    } while ((n | 0) != 0);
    M = 91;
    break;
   }
  case 115:
   {
    m = c[ia >> 2] | 0;
    m = m | 0 ? m : 18543;
    M = 91;
    break;
   }
  case 67:
   {
    c[N >> 2] = c[ia >> 2];
    c[U >> 2] = 0;
    c[ia >> 2] = N;
    t = -1;
    o = N;
    M = 95;
    break;
   }
  case 83:
   {
    m = c[ia >> 2] | 0;
    if (!t) {
     Eb(e, 32, r, 0, u);
     m = 0;
     M = 106;
    } else {
     o = m;
     M = 95;
    }
    break;
   }
  case 65:
  case 71:
  case 70:
  case 69:
  case 97:
  case 103:
  case 102:
  case 101:
   {
    q = +h[ia >> 3];
    c[ga >> 2] = 0;
    h[l >> 3] = q;
    if ((c[l + 4 >> 2] | 0) < 0) {
     q = -q;
     I = 1;
     J = 18550;
    } else {
     m = u & 1;
     if (!(u & 2048)) {
      I = m;
      J = (m | 0) == 0 ? 18551 : 18556;
     } else {
      I = 1;
      J = 18553;
     }
    }
    h[l >> 3] = q;
    H = c[l + 4 >> 2] & 2146435072;
    do if (H >>> 0 < 2146435072 | (H | 0) == 2146435072 & 0 < 0) {
     w = +Fb(q, ga) * 2.0;
     n = w != 0.0;
     if (n) c[ga >> 2] = (c[ga >> 2] | 0) + -1;
     A = G | 32;
     if ((A | 0) == 97) {
      s = G & 32;
      y = (s | 0) == 0 ? J : J + 9 | 0;
      x = I | 2;
      m = 12 - t | 0;
      do if (t >>> 0 > 11 | (m | 0) == 0) q = w; else {
       q = 8.0;
       do {
        m = m + -1 | 0;
        q = q * 16.0;
       } while ((m | 0) != 0);
       if ((a[y >> 0] | 0) == 45) {
        q = -(q + (-w - q));
        break;
       } else {
        q = w + q - q;
        break;
       }
      } while (0);
      n = c[ga >> 2] | 0;
      m = (n | 0) < 0 ? 0 - n | 0 : n;
      m = Cb(m, ((m | 0) < 0) << 31 >> 31, X) | 0;
      if ((m | 0) == (X | 0)) {
       a[Y >> 0] = 48;
       m = Y;
      }
      a[m + -1 >> 0] = (n >> 31 & 2) + 43;
      v = m + -2 | 0;
      a[v >> 0] = G + 15;
      p = (t | 0) < 1;
      o = (u & 8 | 0) == 0;
      m = ha;
      do {
       J = ~~q;
       n = m + 1 | 0;
       a[m >> 0] = d[18517 + J >> 0] | s;
       q = (q - +(J | 0)) * 16.0;
       do if ((n - V | 0) == 1) {
        if (o & (p & q == 0.0)) {
         m = n;
         break;
        }
        a[n >> 0] = 46;
        m = m + 2 | 0;
       } else m = n; while (0);
      } while (q != 0.0);
      p = v;
      o = (t | 0) != 0 & ($ + m | 0) < (t | 0) ? aa + t - p | 0 : _ - p + m | 0;
      s = o + x | 0;
      Eb(e, 32, r, s, u);
      if (!(c[e >> 2] & 32)) Ab(y, x, e) | 0;
      Eb(e, 48, r, s, u ^ 65536);
      n = m - V | 0;
      if (!(c[e >> 2] & 32)) Ab(ha, n, e) | 0;
      m = Z - p | 0;
      Eb(e, 48, o - (n + m) | 0, 0, 0);
      if (!(c[e >> 2] & 32)) Ab(v, m, e) | 0;
      Eb(e, 32, r, s, u ^ 8192);
      m = (s | 0) < (r | 0) ? r : s;
      break;
     }
     m = (t | 0) < 0 ? 6 : t;
     if (n) {
      n = (c[ga >> 2] | 0) + -28 | 0;
      c[ga >> 2] = n;
      q = w * 268435456.0;
     } else {
      q = w;
      n = c[ga >> 2] | 0;
     }
     H = (n | 0) < 0 ? fa : ba;
     o = H;
     do {
      F = ~~q >>> 0;
      c[o >> 2] = F;
      o = o + 4 | 0;
      q = (q - +(F >>> 0)) * 1.0e9;
     } while (q != 0.0);
     if ((n | 0) > 0) {
      p = H;
      t = o;
      while (1) {
       s = (n | 0) > 29 ? 29 : n;
       n = t + -4 | 0;
       do if (n >>> 0 >= p >>> 0) {
        o = 0;
        do {
         E = Zb(c[n >> 2] | 0, 0, s | 0) | 0;
         E = Wb(E | 0, D | 0, o | 0, 0) | 0;
         F = D;
         C = dc(E | 0, F | 0, 1e9, 0) | 0;
         c[n >> 2] = C;
         o = $b(E | 0, F | 0, 1e9, 0) | 0;
         n = n + -4 | 0;
        } while (n >>> 0 >= p >>> 0);
        if (!o) break;
        p = p + -4 | 0;
        c[p >> 2] = o;
       } while (0);
       o = t;
       while (1) {
        if (o >>> 0 <= p >>> 0) break;
        n = o + -4 | 0;
        if (!(c[n >> 2] | 0)) o = n; else break;
       }
       n = (c[ga >> 2] | 0) - s | 0;
       c[ga >> 2] = n;
       if ((n | 0) > 0) t = o; else break;
      }
     } else p = H;
     if ((n | 0) < 0) {
      y = ((m + 25 | 0) / 9 | 0) + 1 | 0;
      z = (A | 0) == 102;
      do {
       x = 0 - n | 0;
       x = (x | 0) > 9 ? 9 : x;
       do if (p >>> 0 < o >>> 0) {
        s = (1 << x) + -1 | 0;
        t = 1e9 >>> x;
        v = 0;
        n = p;
        do {
         F = c[n >> 2] | 0;
         c[n >> 2] = (F >>> x) + v;
         v = S(F & s, t) | 0;
         n = n + 4 | 0;
        } while (n >>> 0 < o >>> 0);
        n = (c[p >> 2] | 0) == 0 ? p + 4 | 0 : p;
        if (!v) {
         p = n;
         n = o;
         break;
        }
        c[o >> 2] = v;
        p = n;
        n = o + 4 | 0;
       } else {
        p = (c[p >> 2] | 0) == 0 ? p + 4 | 0 : p;
        n = o;
       } while (0);
       o = z ? H : p;
       o = (n - o >> 2 | 0) > (y | 0) ? o + (y << 2) | 0 : n;
       n = (c[ga >> 2] | 0) + x | 0;
       c[ga >> 2] = n;
      } while ((n | 0) < 0);
     }
     F = H;
     do if (p >>> 0 < o >>> 0) {
      n = (F - p >> 2) * 9 | 0;
      t = c[p >> 2] | 0;
      if (t >>> 0 < 10) break; else s = 10;
      do {
       s = s * 10 | 0;
       n = n + 1 | 0;
      } while (t >>> 0 >= s >>> 0);
     } else n = 0; while (0);
     B = (A | 0) == 103;
     C = (m | 0) != 0;
     s = m - ((A | 0) != 102 ? n : 0) + ((C & B) << 31 >> 31) | 0;
     if ((s | 0) < (((o - F >> 2) * 9 | 0) + -9 | 0)) {
      s = s + 9216 | 0;
      v = H + 4 + (((s | 0) / 9 | 0) + -1024 << 2) | 0;
      s = ((s | 0) % 9 | 0) + 1 | 0;
      if ((s | 0) < 9) {
       t = 10;
       do {
        t = t * 10 | 0;
        s = s + 1 | 0;
       } while ((s | 0) != 9);
      } else t = 10;
      y = c[v >> 2] | 0;
      z = (y >>> 0) % (t >>> 0) | 0;
      s = (v + 4 | 0) == (o | 0);
      do if (s & (z | 0) == 0) s = v; else {
       w = (((y >>> 0) / (t >>> 0) | 0) & 1 | 0) == 0 ? 9007199254740992.0 : 9007199254740994.0;
       x = (t | 0) / 2 | 0;
       if (z >>> 0 < x >>> 0) q = .5; else q = s & (z | 0) == (x | 0) ? 1.0 : 1.5;
       do if (I) {
        if ((a[J >> 0] | 0) != 45) break;
        q = -q;
        w = -w;
       } while (0);
       s = y - z | 0;
       c[v >> 2] = s;
       if (!(w + q != w)) {
        s = v;
        break;
       }
       E = s + t | 0;
       c[v >> 2] = E;
       if (E >>> 0 > 999999999) {
        s = v;
        while (1) {
         n = s + -4 | 0;
         c[s >> 2] = 0;
         if (n >>> 0 < p >>> 0) {
          p = p + -4 | 0;
          c[p >> 2] = 0;
         }
         E = (c[n >> 2] | 0) + 1 | 0;
         c[n >> 2] = E;
         if (E >>> 0 > 999999999) s = n; else {
          v = n;
          break;
         }
        }
       }
       n = (F - p >> 2) * 9 | 0;
       t = c[p >> 2] | 0;
       if (t >>> 0 < 10) {
        s = v;
        break;
       } else s = 10;
       do {
        s = s * 10 | 0;
        n = n + 1 | 0;
       } while (t >>> 0 >= s >>> 0);
       s = v;
      } while (0);
      E = s + 4 | 0;
      o = o >>> 0 > E >>> 0 ? E : o;
     }
     z = 0 - n | 0;
     E = o;
     while (1) {
      if (E >>> 0 <= p >>> 0) {
       A = 0;
       break;
      }
      o = E + -4 | 0;
      if (!(c[o >> 2] | 0)) E = o; else {
       A = 1;
       break;
      }
     }
     do if (B) {
      m = (C & 1 ^ 1) + m | 0;
      if ((m | 0) > (n | 0) & (n | 0) > -5) {
       v = G + -1 | 0;
       m = m + -1 - n | 0;
      } else {
       v = G + -2 | 0;
       m = m + -1 | 0;
      }
      o = u & 8;
      if (o | 0) {
       x = o;
       break;
      }
      do if (A) {
       t = c[E + -4 >> 2] | 0;
       if (!t) {
        s = 9;
        break;
       }
       if (!((t >>> 0) % 10 | 0)) {
        s = 0;
        o = 10;
       } else {
        s = 0;
        break;
       }
       do {
        o = o * 10 | 0;
        s = s + 1 | 0;
       } while (!((t >>> 0) % (o >>> 0) | 0 | 0));
      } else s = 9; while (0);
      o = ((E - F >> 2) * 9 | 0) + -9 | 0;
      if ((v | 32 | 0) == 102) {
       x = o - s | 0;
       x = (x | 0) < 0 ? 0 : x;
       m = (m | 0) < (x | 0) ? m : x;
       x = 0;
       break;
      } else {
       x = o + n - s | 0;
       x = (x | 0) < 0 ? 0 : x;
       m = (m | 0) < (x | 0) ? m : x;
       x = 0;
       break;
      }
     } else {
      v = G;
      x = u & 8;
     } while (0);
     y = m | x;
     s = (y | 0) != 0 & 1;
     t = (v | 32 | 0) == 102;
     if (t) {
      z = 0;
      n = (n | 0) > 0 ? n : 0;
     } else {
      o = (n | 0) < 0 ? z : n;
      o = Cb(o, ((o | 0) < 0) << 31 >> 31, X) | 0;
      if ((Z - o | 0) < 2) do {
       o = o + -1 | 0;
       a[o >> 0] = 48;
      } while ((Z - o | 0) < 2);
      a[o + -1 >> 0] = (n >> 31 & 2) + 43;
      n = o + -2 | 0;
      a[n >> 0] = v;
      z = n;
      n = Z - n | 0;
     }
     B = I + 1 + m + s + n | 0;
     Eb(e, 32, r, B, u);
     if (!(c[e >> 2] & 32)) Ab(J, I, e) | 0;
     Eb(e, 48, r, B, u ^ 65536);
     do if (t) {
      p = p >>> 0 > H >>> 0 ? H : p;
      o = p;
      do {
       n = Cb(c[o >> 2] | 0, 0, ca) | 0;
       do if ((o | 0) == (p | 0)) {
        if ((n | 0) != (ca | 0)) break;
        a[ea >> 0] = 48;
        n = ea;
       } else {
        if (n >>> 0 <= ha >>> 0) break;
        Xb(ha | 0, 48, n - V | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ha >>> 0);
       } while (0);
       if (!(c[e >> 2] & 32)) Ab(n, da - n | 0, e) | 0;
       o = o + 4 | 0;
      } while (o >>> 0 <= H >>> 0);
      do if (y | 0) {
       if (c[e >> 2] & 32 | 0) break;
       Ab(20483, 1, e) | 0;
      } while (0);
      if ((m | 0) > 0 & o >>> 0 < E >>> 0) while (1) {
       n = Cb(c[o >> 2] | 0, 0, ca) | 0;
       if (n >>> 0 > ha >>> 0) {
        Xb(ha | 0, 48, n - V | 0) | 0;
        do n = n + -1 | 0; while (n >>> 0 > ha >>> 0);
       }
       if (!(c[e >> 2] & 32)) Ab(n, (m | 0) > 9 ? 9 : m, e) | 0;
       o = o + 4 | 0;
       n = m + -9 | 0;
       if (!((m | 0) > 9 & o >>> 0 < E >>> 0)) {
        m = n;
        break;
       } else m = n;
      }
      Eb(e, 48, m + 9 | 0, 9, 0);
     } else {
      v = A ? E : p + 4 | 0;
      if ((m | 0) > -1) {
       t = (x | 0) == 0;
       s = p;
       do {
        n = Cb(c[s >> 2] | 0, 0, ca) | 0;
        if ((n | 0) == (ca | 0)) {
         a[ea >> 0] = 48;
         n = ea;
        }
        do if ((s | 0) == (p | 0)) {
         o = n + 1 | 0;
         if (!(c[e >> 2] & 32)) Ab(n, 1, e) | 0;
         if (t & (m | 0) < 1) {
          n = o;
          break;
         }
         if (c[e >> 2] & 32 | 0) {
          n = o;
          break;
         }
         Ab(20483, 1, e) | 0;
         n = o;
        } else {
         if (n >>> 0 <= ha >>> 0) break;
         Xb(ha | 0, 48, n + W | 0) | 0;
         do n = n + -1 | 0; while (n >>> 0 > ha >>> 0);
        } while (0);
        o = da - n | 0;
        if (!(c[e >> 2] & 32)) Ab(n, (m | 0) > (o | 0) ? o : m, e) | 0;
        m = m - o | 0;
        s = s + 4 | 0;
       } while (s >>> 0 < v >>> 0 & (m | 0) > -1);
      }
      Eb(e, 48, m + 18 | 0, 18, 0);
      if (c[e >> 2] & 32 | 0) break;
      Ab(z, Z - z | 0, e) | 0;
     } while (0);
     Eb(e, 32, r, B, u ^ 8192);
     m = (B | 0) < (r | 0) ? r : B;
    } else {
     s = (G & 32 | 0) != 0;
     p = q != q | 0.0 != 0.0;
     n = p ? 0 : I;
     o = n + 3 | 0;
     Eb(e, 32, r, o, y);
     m = c[e >> 2] | 0;
     if (!(m & 32)) {
      Ab(J, n, e) | 0;
      m = c[e >> 2] | 0;
     }
     if (!(m & 32)) Ab(p ? (s ? 20473 : 18577) : s ? 18569 : 18573, 3, e) | 0;
     Eb(e, 32, r, o, u ^ 8192);
     m = (o | 0) < (r | 0) ? r : o;
    } while (0);
    r = L;
    x = K;
    continue a;
   }
  default:
   {
    v = 0;
    s = 18533;
    n = Q;
   }
  } while (0);
  g : do if ((M | 0) == 65) {
   p = ia;
   o = c[p >> 2] | 0;
   p = c[p + 4 >> 2] | 0;
   s = v & 32;
   if ((o | 0) == 0 & (p | 0) == 0) {
    m = Q;
    o = 0;
    p = 0;
   } else {
    m = Q;
    do {
     m = m + -1 | 0;
     a[m >> 0] = d[18517 + (o & 15) >> 0] | s;
     o = Yb(o | 0, p | 0, 4) | 0;
     p = D;
    } while (!((o | 0) == 0 & (p | 0) == 0));
    p = ia;
    o = c[p >> 2] | 0;
    p = c[p + 4 >> 2] | 0;
   }
   s = (n & 8 | 0) == 0 | (o | 0) == 0 & (p | 0) == 0;
   p = s ? 0 : 2;
   s = s ? 18533 : 18533 + (v >> 4) | 0;
   M = 78;
  } else if ((M | 0) == 77) {
   m = Cb(n, m, Q) | 0;
   n = u;
   M = 78;
  } else if ((M | 0) == 91) {
   M = 0;
   u = Db(m, 0, t) | 0;
   J = (u | 0) == 0;
   x = m;
   v = 0;
   s = 18533;
   n = J ? m + t | 0 : u;
   t = J ? t : u - m | 0;
   u = y;
  } else if ((M | 0) == 95) {
   M = 0;
   s = o;
   m = 0;
   n = 0;
   while (1) {
    p = c[s >> 2] | 0;
    if (!p) break;
    n = Gb(O, p) | 0;
    if ((n | 0) < 0 | n >>> 0 > (t - m | 0) >>> 0) break;
    m = n + m | 0;
    if (t >>> 0 > m >>> 0) s = s + 4 | 0; else break;
   }
   if ((n | 0) < 0) {
    k = -1;
    break a;
   }
   Eb(e, 32, r, m, u);
   if (!m) {
    m = 0;
    M = 106;
   } else {
    p = 0;
    while (1) {
     n = c[o >> 2] | 0;
     if (!n) {
      M = 106;
      break g;
     }
     n = Gb(O, n) | 0;
     p = n + p | 0;
     if ((p | 0) > (m | 0)) {
      M = 106;
      break g;
     }
     if (!(c[e >> 2] & 32)) Ab(O, n, e) | 0;
     if (p >>> 0 >= m >>> 0) {
      M = 106;
      break;
     } else o = o + 4 | 0;
    }
   }
  } while (0);
  if ((M | 0) == 106) {
   M = 0;
   Eb(e, 32, r, m, u ^ 8192);
   m = (r | 0) > (m | 0) ? r : m;
   r = L;
   x = K;
   continue;
  }
  if ((M | 0) == 78) {
   M = 0;
   u = (t | 0) > -1 ? n & -65537 : n;
   n = ia;
   n = (c[n >> 2] | 0) != 0 | (c[n + 4 >> 2] | 0) != 0;
   if ((t | 0) != 0 | n) {
    J = (n & 1 ^ 1) + (R - m) | 0;
    x = m;
    v = p;
    n = Q;
    t = (t | 0) > (J | 0) ? t : J;
   } else {
    x = Q;
    v = p;
    n = Q;
    t = 0;
   }
  }
  p = n - x | 0;
  n = (t | 0) < (p | 0) ? p : t;
  o = n + v | 0;
  m = (r | 0) < (o | 0) ? o : r;
  Eb(e, 32, m, o, u);
  if (!(c[e >> 2] & 32)) Ab(s, v, e) | 0;
  Eb(e, 48, m, o, u ^ 65536);
  Eb(e, 48, n, p, 0);
  if (!(c[e >> 2] & 32)) Ab(x, p, e) | 0;
  Eb(e, 32, m, o, u ^ 8192);
  r = L;
  x = K;
 }
 h : do if ((M | 0) == 253) if (!e) if (!r) k = 0; else {
  k = 1;
  while (1) {
   m = c[j + (k << 2) >> 2] | 0;
   if (!m) break;
   Bb(g + (k << 3) | 0, m, f);
   k = k + 1 | 0;
   if ((k | 0) >= 10) {
    k = 1;
    break h;
   }
  }
  while (1) {
   k = k + 1 | 0;
   if ((k | 0) >= 10) {
    k = 1;
    break h;
   }
   if (c[j + (k << 2) >> 2] | 0) {
    k = -1;
    break;
   }
  }
 } while (0);
 i = ja;
 return k | 0;
}

function Ra(d, e) {
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 v = i;
 i = i + 32 | 0;
 t = v + 24 | 0;
 q = v + 16 | 0;
 o = v + 8 | 0;
 s = v;
 l = v + 28 | 0;
 if ((d | 0) < 3) {
  a : do if (!0) {
   f = 16808;
   u = 5;
  } else {
   g = 16808;
   f = 16808;
   while (1) {
    if (!(a[g >> 0] | 0)) break a;
    g = g + 1 | 0;
    f = g;
    if (!(f & 3)) {
     f = g;
     u = 5;
     break;
    }
   }
  } while (0);
  if ((u | 0) == 5) {
   while (1) {
    g = c[f >> 2] | 0;
    if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
   }
   if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
  }
  k = f - 16808 | 0;
  f = c[3542] | 0;
  do if (!f) {
   f = a[14226] | 0;
   a[14226] = f + 255 | f;
   f = c[3538] | 0;
   if (!(f & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    g = c[3549] | 0;
    c[3545] = g;
    c[3543] = g;
    f = g + (c[3550] | 0) | 0;
    c[3542] = f;
    u = 15;
    break;
   } else {
    c[3538] = f | 32;
    f = 0;
    break;
   }
  } else {
   g = c[3543] | 0;
   u = 15;
  } while (0);
  b : do if ((u | 0) == 15) {
   j = g;
   if ((f - g | 0) >>> 0 < k >>> 0) {
    f = Ba[c[14188 >> 2] & 7](14152, 16808, k) | 0;
    break;
   }
   c : do if ((a[14227] | 0) > -1) {
    f = k;
    while (1) {
     if (!f) {
      d = k;
      h = 16808;
      f = 0;
      g = j;
      break c;
     }
     g = f + -1 | 0;
     if ((a[16808 + g >> 0] | 0) == 10) break; else f = g;
    }
    if ((Ba[c[14188 >> 2] & 7](14152, 16808, f) | 0) >>> 0 < f >>> 0) break b;
    d = k - f | 0;
    h = 16808 + f | 0;
    g = c[3543] | 0;
   } else {
    d = k;
    h = 16808;
    f = 0;
    g = j;
   } while (0);
   bc(g | 0, h | 0, d | 0) | 0;
   c[3543] = (c[3543] | 0) + d;
   f = f + d | 0;
  } while (0);
  if ((f | 0) != (k | 0)) if ((((f >>> 0) / (k >>> 0) | 0) + -1 | 0) < 0) {
   u = 0;
   i = v;
   return u | 0;
  }
  d = a[14227] | 0;
  if (d << 24 >> 24 == 10) g = c[3542] | 0; else {
   f = c[3543] | 0;
   g = c[3542] | 0;
   if (f >>> 0 < g >>> 0) {
    c[3543] = f + 1;
    a[f >> 0] = 10;
    u = 0;
    i = v;
    return u | 0;
   }
  }
  a[l >> 0] = 10;
  do if (!g) {
   d = b[7113] | 0;
   f = (d & 65535) << 24 >> 24;
   a[14226] = f + 255 | f;
   f = c[3538] | 0;
   if (!(f & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    f = (d & 65535) >>> 8 & 255;
    u = 34;
    break;
   } else {
    c[3538] = f | 32;
    break;
   }
  } else {
   h = c[3543] | 0;
   f = d;
   u = 34;
  } while (0);
  do if ((u | 0) == 34) if (h >>> 0 >= g >>> 0 | f << 24 >> 24 == 10) {
   Ba[c[14188 >> 2] & 7](14152, l, 1) | 0;
   break;
  } else {
   c[3543] = h + 1;
   a[h >> 0] = 10;
   break;
  } while (0);
  u = 0;
  i = v;
  return u | 0;
 }
 r = c[e + (d + -1 << 2) >> 2] | 0;
 c[s >> 2] = r;
 g = ya(10, s | 0) | 0;
 if (g >>> 0 > 4294963200) {
  if (!(c[5123] | 0)) f = 20536; else f = c[(ec() | 0) + 64 >> 2] | 0;
  c[f >> 2] = 0 - g;
 }
 c[5122] = 0;
 p = d + -2 | 0;
 n = (p | 0) < 1;
 do if (n) u = 60; else {
  f = 0;
  m = 1;
  while (1) {
   k = e + (m << 2) | 0;
   l = c[k >> 2] | 0;
   h = l;
   d : do if (!(h & 3)) {
    g = l;
    u = 46;
   } else {
    d = l;
    g = h;
    while (1) {
     if (!(a[d >> 0] | 0)) break d;
     d = d + 1 | 0;
     g = d;
     if (!(g & 3)) {
      g = d;
      u = 46;
      break;
     }
    }
   } while (0);
   if ((u | 0) == 46) {
    u = 0;
    while (1) {
     d = c[g >> 2] | 0;
     if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) g = g + 4 | 0; else break;
    }
    if ((d & 255) << 24 >> 24) do g = g + 1 | 0; while ((a[g >> 0] | 0) != 0);
   }
   d = 1 - h + g | 0;
   do {
    if (!d) {
     g = 0;
     break;
    }
    d = d + -1 | 0;
    g = l + d | 0;
   } while ((a[g >> 0] | 0) != 47);
   g = g | 0 ? g + 1 | 0 : l;
   d = a[g >> 0] | 0;
   if (d << 24 >> 24 == 68) {
    h = g;
    j = 16717;
    do {
     j = j + 1 | 0;
     h = h + 1 | 0;
     g = a[j >> 0] | 0;
     d = a[h >> 0] | 0;
    } while (!(g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 != d << 24 >> 24));
   } else g = 68;
   if (g << 24 >> 24 == d << 24 >> 24) {
    c[o >> 2] = l;
    Ob(0, o);
    f = Qa(c[k >> 2] | 0, r) | 0;
    if (!f) f = 1; else {
     u = 162;
     break;
    }
   }
   if ((m | 0) < (p | 0)) m = m + 1 | 0; else {
    u = 59;
    break;
   }
  }
  if ((u | 0) == 59) if (!f) {
   u = 60;
   break;
  } else break; else if ((u | 0) == 162) {
   i = v;
   return f | 0;
  }
 } while (0);
 if ((u | 0) == 60) {
  f = Pa(16717, 16412, 304, r) | 0;
  if (f | 0) {
   u = f;
   i = v;
   return u | 0;
  }
 }
 e : do if (!n) {
  l = 0;
  m = 1;
  f : while (1) {
   j = e + (m << 2) | 0;
   k = c[j >> 2] | 0;
   d = k;
   g : do if (!(d & 3)) {
    f = k;
    u = 65;
   } else {
    g = k;
    f = d;
    while (1) {
     if (!(a[g >> 0] | 0)) break g;
     g = g + 1 | 0;
     f = g;
     if (!(f & 3)) {
      f = g;
      u = 65;
      break;
     }
    }
   } while (0);
   if ((u | 0) == 65) {
    u = 0;
    while (1) {
     g = c[f >> 2] | 0;
     if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
    }
    if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
   }
   g = 1 - d + f | 0;
   do {
    if (!g) {
     f = 0;
     break;
    }
    g = g + -1 | 0;
    f = k + g | 0;
   } while ((a[f >> 0] | 0) != 47);
   f = f | 0 ? f + 1 | 0 : k;
   g = a[f >> 0] | 0;
   if (g << 24 >> 24 == 68) {
    d = f;
    h = 16717;
    do {
     h = h + 1 | 0;
     d = d + 1 | 0;
     f = a[h >> 0] | 0;
     g = a[d >> 0] | 0;
    } while (!(f << 24 >> 24 == 0 ? 1 : f << 24 >> 24 != g << 24 >> 24));
   } else f = 68;
   do if (f << 24 >> 24 == g << 24 >> 24) f = l; else {
    c[q >> 2] = k;
    Ob(0, q);
    h = c[j >> 2] | 0;
    d = h;
    h : do if (!(d & 3)) {
     f = h;
     u = 79;
    } else {
     g = h;
     f = d;
     while (1) {
      if (!(a[g >> 0] | 0)) break h;
      g = g + 1 | 0;
      f = g;
      if (!(f & 3)) {
       f = g;
       u = 79;
       break;
      }
     }
    } while (0);
    if ((u | 0) == 79) {
     u = 0;
     while (1) {
      g = c[f >> 2] | 0;
      if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
     }
     if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
    }
    f = f - d | 0;
    if (f >>> 0 > 4) {
     g = h + f + -4 | 0;
     f = a[g >> 0] | 0;
     d = f & 255;
     switch (f << 24 >> 24) {
     case 0:
      {
       g = 46;
       f = 0;
       break;
      }
     case 46:
      {
       u = 87;
       break;
      }
     default:
      if ((((d + -65 | 0) >>> 0 < 26 ? d | 32 : d) | 0) == 46) u = 87; else g = 46;
     }
     i : do if ((u | 0) == 87) {
      f = g + 1 | 0;
      d = a[f >> 0] | 0;
      g = d & 255;
      switch (d << 24 >> 24) {
      case 0:
       {
        g = 108;
        f = 0;
        break i;
       }
      case 108:
       break;
      default:
       if ((((g + -65 | 0) >>> 0 < 26 ? g | 32 : g) | 0) != 108) {
        g = 108;
        f = d;
        break i;
       }
      }
      g = f + 1 | 0;
      f = a[g >> 0] | 0;
      d = f & 255;
      switch (f << 24 >> 24) {
      case 0:
       {
        g = 117;
        f = 0;
        break i;
       }
      case 117:
       break;
      default:
       if ((((d + -65 | 0) >>> 0 < 26 ? d | 32 : d) | 0) != 117) {
        g = 117;
        break i;
       }
      }
      d = g + 1 | 0;
      f = a[d >> 0] | 0;
      g = f & 255;
      switch (f << 24 >> 24) {
      case 0:
       {
        g = 97;
        f = 0;
        break i;
       }
      case 97:
       break;
      default:
       if ((((g + -65 | 0) >>> 0 < 26 ? g | 32 : g) | 0) != 97) {
        g = 97;
        break i;
       }
      }
      g = 0;
      f = a[d + 1 >> 0] | 0;
     } while (0);
     u = f & 255;
     if ((((g + -65 | 0) >>> 0 < 26 ? g | 32 : g) | 0) == (((u + -65 | 0) >>> 0 < 26 ? u | 32 : u) | 0)) u = 92; else u = 89;
    } else u = 89;
    if ((u | 0) == 89) {
     u = 0;
     f = a[h >> 0] | 0;
     if (f << 24 >> 24 == 45) {
      f = a[h + 1 >> 0] | 0;
      g = 0;
     } else g = 45;
     if (g << 24 >> 24 == f << 24 >> 24) u = 92; else g = l;
    }
    if ((u | 0) == 92) {
     u = 0;
     if (!l) g = 1; else {
      j : do if (!1) {
       f = 17141;
       u = 96;
      } else {
       f = 17141;
       g = 17141;
       while (1) {
        if (!(a[f >> 0] | 0)) {
         f = g;
         break j;
        }
        f = f + 1 | 0;
        g = f;
        if (!(g & 3)) {
         u = 96;
         break;
        }
       }
      } while (0);
      if ((u | 0) == 96) {
       while (1) {
        g = c[f >> 2] | 0;
        if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
       }
       if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
      }
      d = f - 17141 | 0;
      f = c[3542] | 0;
      do if (!f) {
       f = a[14226] | 0;
       a[14226] = f + 255 | f;
       f = c[3538] | 0;
       if (!(f & 8)) {
        c[3540] = 0;
        c[3539] = 0;
        g = c[3549] | 0;
        c[3545] = g;
        c[3543] = g;
        f = g + (c[3550] | 0) | 0;
        c[3542] = f;
        u = 106;
        break;
       } else {
        c[3538] = f | 32;
        f = 0;
        u = 109;
        break;
       }
      } else {
       g = c[3543] | 0;
       u = 106;
      } while (0);
      do if ((u | 0) == 106) {
       u = 0;
       if ((f - g | 0) >>> 0 < d >>> 0) {
        f = Ba[c[14188 >> 2] & 7](14152, 17141, d) | 0;
        u = 109;
        break;
       } else {
        bc(g | 0, 17141, d | 0) | 0;
        c[3543] = (c[3543] | 0) + d;
        break;
       }
      } while (0);
      if ((u | 0) == 109) {
       u = 0;
       if ((f | 0) != (d | 0)) if ((((f >>> 0) / (d >>> 0) | 0) + -1 | 0) < 0) {
        f = l;
        break;
       }
      }
      d = a[14227] | 0;
      if (d << 24 >> 24 == 10) g = c[3542] | 0; else {
       f = c[3543] | 0;
       g = c[3542] | 0;
       if (f >>> 0 < g >>> 0) {
        c[3543] = f + 1;
        a[f >> 0] = 10;
        f = l;
        break;
       }
      }
      a[s >> 0] = 10;
      do if (!g) {
       d = b[7113] | 0;
       f = (d & 65535) << 24 >> 24;
       a[14226] = f + 255 | f;
       f = c[3538] | 0;
       if (!(f & 8)) {
        c[3540] = 0;
        c[3539] = 0;
        h = c[3549] | 0;
        c[3545] = h;
        c[3543] = h;
        g = h + (c[3550] | 0) | 0;
        c[3542] = g;
        f = (d & 65535) >>> 8 & 255;
        u = 120;
        break;
       } else {
        c[3538] = f | 32;
        break;
       }
      } else {
       h = c[3543] | 0;
       f = d;
       u = 120;
      } while (0);
      do if ((u | 0) == 120) {
       u = 0;
       if (h >>> 0 >= g >>> 0 | f << 24 >> 24 == 10) {
        Ba[c[14188 >> 2] & 7](14152, s, 1) | 0;
        break;
       } else {
        c[3543] = h + 1;
        a[h >> 0] = 10;
        break;
       }
      } while (0);
      f = l;
      break;
     }
    }
    f = Qa(h, r) | 0;
    if (!f) f = g; else break f;
   } while (0);
   if ((m | 0) < (p | 0)) {
    l = f;
    m = m + 1 | 0;
   } else break e;
  }
  i = v;
  return f | 0;
 } while (0);
 if (!(Ta(c[5122] | 0) | 0)) {
  u = 0;
  i = v;
  return u | 0;
 }
 k : do if (!1) {
  f = 16329;
  u = 130;
 } else {
  f = 16329;
  g = 16329;
  while (1) {
   if (!(a[f >> 0] | 0)) {
    f = g;
    break k;
   }
   f = f + 1 | 0;
   g = f;
   if (!(g & 3)) {
    u = 130;
    break;
   }
  }
 } while (0);
 if ((u | 0) == 130) {
  while (1) {
   g = c[f >> 2] | 0;
   if (!((g & -2139062144 ^ -2139062144) & g + -16843009)) f = f + 4 | 0; else break;
  }
  if ((g & 255) << 24 >> 24) do f = f + 1 | 0; while ((a[f >> 0] | 0) != 0);
 }
 d = f - 16329 | 0;
 f = c[3542] | 0;
 do if (!f) {
  f = a[14226] | 0;
  a[14226] = f + 255 | f;
  f = c[3538] | 0;
  if (!(f & 8)) {
   c[3540] = 0;
   c[3539] = 0;
   g = c[3549] | 0;
   c[3545] = g;
   c[3543] = g;
   f = g + (c[3550] | 0) | 0;
   c[3542] = f;
   u = 140;
   break;
  } else {
   c[3538] = f | 32;
   f = 0;
   u = 143;
   break;
  }
 } else {
  g = c[3543] | 0;
  u = 140;
 } while (0);
 do if ((u | 0) == 140) if ((f - g | 0) >>> 0 < d >>> 0) {
  f = Ba[c[14188 >> 2] & 7](14152, 16329, d) | 0;
  u = 143;
  break;
 } else {
  bc(g | 0, 16329, d | 0) | 0;
  c[3543] = (c[3543] | 0) + d;
  u = 145;
  break;
 } while (0);
 if ((u | 0) == 143) if ((f | 0) == (d | 0)) u = 145; else if ((((f >>> 0) / (d >>> 0) | 0) + -1 | 0) >= 0) u = 145;
 do if ((u | 0) == 145) {
  d = a[14227] | 0;
  if (d << 24 >> 24 == 10) g = c[3542] | 0; else {
   f = c[3543] | 0;
   g = c[3542] | 0;
   if (f >>> 0 < g >>> 0) {
    c[3543] = f + 1;
    a[f >> 0] = 10;
    break;
   }
  }
  a[s >> 0] = 10;
  do if (!g) {
   d = b[7113] | 0;
   f = (d & 65535) << 24 >> 24;
   a[14226] = f + 255 | f;
   f = c[3538] | 0;
   if (!(f & 8)) {
    c[3540] = 0;
    c[3539] = 0;
    h = c[3549] | 0;
    c[3545] = h;
    c[3543] = h;
    g = h + (c[3550] | 0) | 0;
    c[3542] = g;
    f = (d & 65535) >>> 8 & 255;
    u = 154;
    break;
   } else {
    c[3538] = f | 32;
    break;
   }
  } else {
   h = c[3543] | 0;
   f = d;
   u = 154;
  } while (0);
  do if ((u | 0) == 154) if (h >>> 0 >= g >>> 0 | f << 24 >> 24 == 10) {
   Ba[c[14188 >> 2] & 7](14152, s, 1) | 0;
   break;
  } else {
   c[3543] = h + 1;
   a[h >> 0] = 10;
   break;
  } while (0);
 } while (0);
 c[t >> 2] = r;
 g = ya(10, t | 0) | 0;
 if (g >>> 0 <= 4294963200) {
  u = 0;
  i = v;
  return u | 0;
 }
 if (!(c[5123] | 0)) f = 20536; else f = c[(ec() | 0) + 64 >> 2] | 0;
 c[f >> 2] = 0 - g;
 u = 0;
 i = v;
 return u | 0;
}

function ab(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, i = 0;
 g = c[a >> 2] | 0;
 f = a + 4 | 0;
 e = c[f >> 2] | 0;
 g = g >>> 29 | g << 3;
 e = e >>> 29 | e << 3;
 if (!d) {
  h = c[b + 120 >> 2] ^ g;
  i = c[b + 124 >> 2] ^ g;
  i = c[3072 + ((h >>> 2 & 63) << 2) >> 2] ^ e ^ c[3584 + ((h >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((h >>> 18 & 63) << 2) >> 2] ^ c[4608 + (h >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  e = i ^ c[b + 112 >> 2];
  h = c[b + 116 >> 2] ^ i;
  h = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  e = h ^ c[b + 104 >> 2];
  d = c[b + 108 >> 2] ^ h;
  d = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  e = d ^ c[b + 96 >> 2];
  g = c[b + 100 >> 2] ^ d;
  g = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((g >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((g >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((g >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((g >>> 4 | g << 28) >>> 26 << 2) >> 2];
  e = g ^ c[b + 88 >> 2];
  h = c[b + 92 >> 2] ^ g;
  h = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  e = h ^ c[b + 80 >> 2];
  d = c[b + 84 >> 2] ^ h;
  d = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  e = d ^ c[b + 72 >> 2];
  g = c[b + 76 >> 2] ^ d;
  g = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((g >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((g >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((g >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((g >>> 4 | g << 28) >>> 26 << 2) >> 2];
  e = g ^ c[b + 64 >> 2];
  h = c[b + 68 >> 2] ^ g;
  h = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  e = h ^ c[b + 56 >> 2];
  d = c[b + 60 >> 2] ^ h;
  d = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  e = d ^ c[b + 48 >> 2];
  g = c[b + 52 >> 2] ^ d;
  g = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((g >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((g >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((g >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((g >>> 4 | g << 28) >>> 26 << 2) >> 2];
  e = g ^ c[b + 40 >> 2];
  h = c[b + 44 >> 2] ^ g;
  h = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  e = h ^ c[b + 32 >> 2];
  d = c[b + 36 >> 2] ^ h;
  d = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  e = d ^ c[b + 24 >> 2];
  g = c[b + 28 >> 2] ^ d;
  g = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((g >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((g >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((g >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((g >>> 4 | g << 28) >>> 26 << 2) >> 2];
  e = g ^ c[b + 16 >> 2];
  h = c[b + 20 >> 2] ^ g;
  h = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  e = h ^ c[b + 8 >> 2];
  d = c[b + 12 >> 2] ^ h;
  d = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  e = d ^ c[b >> 2];
  g = c[b + 4 >> 2] ^ d;
  g = c[3072 + ((e >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((e >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((e >>> 18 & 63) << 2) >> 2] ^ c[4608 + (e >>> 26 << 2) >> 2] ^ c[3328 + ((g >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((g >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((g >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((g >>> 4 | g << 28) >>> 26 << 2) >> 2];
  e = d >>> 3;
  d = d << 29;
  d = e | d;
  c[a >> 2] = d;
  d = g >>> 3;
  g = g << 29;
  g = d | g;
  c[f >> 2] = g;
  return;
 } else {
  h = c[b >> 2] ^ g;
  i = c[b + 4 >> 2] ^ g;
  i = c[3072 + ((h >>> 2 & 63) << 2) >> 2] ^ e ^ c[3584 + ((h >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((h >>> 18 & 63) << 2) >> 2] ^ c[4608 + (h >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  h = i ^ c[b + 8 >> 2];
  d = c[b + 12 >> 2] ^ i;
  d = c[3072 + ((h >>> 2 & 63) << 2) >> 2] ^ g ^ c[3584 + ((h >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((h >>> 18 & 63) << 2) >> 2] ^ c[4608 + (h >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  g = d ^ c[b + 16 >> 2];
  h = c[b + 20 >> 2] ^ d;
  h = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  g = h ^ c[b + 24 >> 2];
  i = c[b + 28 >> 2] ^ h;
  i = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  g = i ^ c[b + 32 >> 2];
  d = c[b + 36 >> 2] ^ i;
  d = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  g = d ^ c[b + 40 >> 2];
  h = c[b + 44 >> 2] ^ d;
  h = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  g = h ^ c[b + 48 >> 2];
  i = c[b + 52 >> 2] ^ h;
  i = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  g = i ^ c[b + 56 >> 2];
  d = c[b + 60 >> 2] ^ i;
  d = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  g = d ^ c[b + 64 >> 2];
  h = c[b + 68 >> 2] ^ d;
  h = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  g = h ^ c[b + 72 >> 2];
  i = c[b + 76 >> 2] ^ h;
  i = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  g = i ^ c[b + 80 >> 2];
  d = c[b + 84 >> 2] ^ i;
  d = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  g = d ^ c[b + 88 >> 2];
  h = c[b + 92 >> 2] ^ d;
  h = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  g = h ^ c[b + 96 >> 2];
  i = c[b + 100 >> 2] ^ h;
  i = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  g = i ^ c[b + 104 >> 2];
  d = c[b + 108 >> 2] ^ i;
  d = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ h ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((d >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((d >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((d >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((d >>> 4 | d << 28) >>> 26 << 2) >> 2];
  g = d ^ c[b + 112 >> 2];
  h = c[b + 116 >> 2] ^ d;
  h = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ i ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((h >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((h >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((h >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((h >>> 4 | h << 28) >>> 26 << 2) >> 2];
  g = h ^ c[b + 120 >> 2];
  i = c[b + 124 >> 2] ^ h;
  i = c[3072 + ((g >>> 2 & 63) << 2) >> 2] ^ d ^ c[3584 + ((g >>> 10 & 63) << 2) >> 2] ^ c[4096 + ((g >>> 18 & 63) << 2) >> 2] ^ c[4608 + (g >>> 26 << 2) >> 2] ^ c[3328 + ((i >>> 6 & 63) << 2) >> 2] ^ c[3840 + ((i >>> 14 & 63) << 2) >> 2] ^ c[4352 + ((i >>> 22 & 63) << 2) >> 2] ^ c[4864 + ((i >>> 4 | i << 28) >>> 26 << 2) >> 2];
  g = h >>> 3;
  h = h << 29;
  h = g | h;
  c[a >> 2] = h;
  h = i >>> 3;
  i = i << 29;
  i = h | i;
  c[f >> 2] = i;
  return;
 }
}

function Sa(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0;
 G = i;
 i = i + 16 | 0;
 E = G;
 if (!b) {
  F = -102;
  i = G;
  return F | 0;
 }
 F = b + 56 | 0;
 if (!(c[F >> 2] | 0)) {
  F = -102;
  i = G;
  return F | 0;
 }
 q = b + 64 | 0;
 c[b + 68 >> 2] = 0;
 r = b + 156 | 0;
 if ((c[r >> 2] | 0) == 8) if (!(c[b + 160 >> 2] | 0)) {
  e = b + 80 | 0;
  f = b + 8 | 0;
  g = b + 28 | 0;
  h = b + 44 | 0;
  j = b + 164 | 0;
  k = b + 124 | 0;
  l = b + 65728 | 0;
  m = b + 72 | 0;
  n = b + 65736 | 0;
  o = b + 76 | 0;
  p = b + 84 | 0;
  do {
   if (!(c[e >> 2] | 0)) {
    Fa[c[f >> 2] & 3](c[g >> 2] | 0, c[h >> 2] | 0, j, c[k >> 2] | 0) | 0;
    B = l;
    B = Wb(c[B >> 2] | 0, c[B + 4 >> 2] | 0, c[k >> 2] | 0, 0) | 0;
    A = l;
    c[A >> 2] = B;
    c[A + 4 >> 2] = D;
    A = n;
    A = Wb(c[A >> 2] | 0, c[A + 4 >> 2] | 0, c[m >> 2] | 0, 0) | 0;
    B = n;
    c[B >> 2] = A;
    c[B + 4 >> 2] = D;
    c[m >> 2] = 0;
    c[k >> 2] = 0;
    c[e >> 2] = 65536;
    c[o >> 2] = j;
   }
   B = c[p >> 2] | 0;
   d = ib(q, 4) | 0;
   c[k >> 2] = (c[p >> 2] | 0) - B + (c[k >> 2] | 0);
  } while (!(d | 0));
 } else d = 0; else d = 0;
 d = (d | 0) == 1 ? 0 : d;
 e = b + 124 | 0;
 f = c[e >> 2] | 0;
 if ((f | 0) != 0 & (d | 0) == 0) {
  B = Fa[c[b + 8 >> 2] & 3](c[b + 28 >> 2] | 0, c[b + 44 >> 2] | 0, b + 164 | 0, f) | 0;
  d = c[e >> 2] | 0;
  A = b + 65728 | 0;
  z = A;
  z = Wb(c[z >> 2] | 0, c[z + 4 >> 2] | 0, d | 0, 0) | 0;
  c[A >> 2] = z;
  c[A + 4 >> 2] = D;
  A = b + 72 | 0;
  z = b + 65736 | 0;
  y = z;
  y = Wb(c[y >> 2] | 0, c[y + 4 >> 2] | 0, c[A >> 2] | 0, 0) | 0;
  c[z >> 2] = y;
  c[z + 4 >> 2] = D;
  c[A >> 2] = 0;
  c[e >> 2] = 0;
  d = ((B | 0) != (d | 0)) << 31 >> 31;
 }
 k = b + 160 | 0;
 if ((c[r >> 2] | 0) == 8) if (!(c[k >> 2] | 0)) {
  h = b + 92 | 0;
  e = c[h >> 2] | 0;
  a : do if (!e) e = -2; else {
   j = c[e + 4 >> 2] | 0;
   switch (j | 0) {
   case 42:
   case 69:
   case 73:
   case 91:
   case 103:
   case 113:
   case 666:
    break;
   default:
    {
     e = -2;
     break a;
    }
   }
   f = c[e + 8 >> 2] | 0;
   if (f) {
    Da[c[b + 100 >> 2] & 1](c[b + 104 >> 2] | 0, f);
    e = c[h >> 2] | 0;
   }
   f = c[e + 68 >> 2] | 0;
   if (f) {
    Da[c[b + 100 >> 2] & 1](c[b + 104 >> 2] | 0, f);
    e = c[h >> 2] | 0;
   }
   f = c[e + 64 >> 2] | 0;
   if (f) {
    Da[c[b + 100 >> 2] & 1](c[b + 104 >> 2] | 0, f);
    e = c[h >> 2] | 0;
   }
   f = c[e + 56 >> 2] | 0;
   if (!f) {
    f = b + 100 | 0;
    g = b + 104 | 0;
   } else {
    e = b + 100 | 0;
    g = b + 104 | 0;
    Da[c[e >> 2] & 1](c[g >> 2] | 0, f);
    f = e;
    e = c[h >> 2] | 0;
   }
   Da[c[f >> 2] & 1](c[g >> 2] | 0, e);
   c[h >> 2] = 0;
   e = (j | 0) == 113 ? -3 : 0;
  } while (0);
  c[b + 120 >> 2] = 0;
  d = (d | 0) == 0 ? e : d;
  C = 26;
 } else {
  e = 0;
  A = 0;
  B = 0;
 } else C = 26;
 if ((C | 0) == 26) if (!(c[k >> 2] | 0)) {
  B = b + 65736 | 0;
  e = c[b + 65704 >> 2] | 0;
  A = c[B + 4 >> 2] | 0;
  B = c[B >> 2] | 0;
 } else {
  e = 0;
  A = 0;
  B = 0;
 }
 z = b + 65728 | 0;
 y = c[z >> 2] | 0;
 z = c[z + 4 >> 2] | 0;
 l = z >>> 0 > 0 | (z | 0) == 0 & y >>> 0 > 4294967294;
 x = A >>> 0 > 0 | (A | 0) == 0 & B >>> 0 > 4294967294;
 if (x | l) C = 31; else {
  w = b + 128 | 0;
  v = c[w + 4 >> 2] | 0;
  if (v >>> 0 > 0 | (v | 0) == 0 & (c[w >> 2] | 0) >>> 0 > 4294967294) C = 31; else o = b + 136 | 0;
 }
 if ((C | 0) == 31) {
  o = b + 136 | 0;
  w = c[o >> 2] | 0;
  a[w + 4 >> 0] = 45;
  a[w + 5 >> 0] = 0;
  w = c[o >> 2] | 0;
  a[w + 6 >> 0] = 45;
  a[w + 7 >> 0] = 0;
 }
 h = c[o >> 2] | 0;
 u = e & 255;
 a[h + 16 >> 0] = u;
 v = e >>> 8 & 255;
 a[h + 17 >> 0] = v;
 w = e >>> 16 & 255;
 a[h + 18 >> 0] = w;
 t = e >>> 24 & 255;
 a[h + 19 >> 0] = t;
 h = c[o >> 2] | 0;
 e = h + 20 | 0;
 if (l) {
  a[e >> 0] = -1;
  e = -1;
  f = -1;
  g = -1;
 } else {
  a[e >> 0] = y;
  g = Yb(y | 0, z | 0, 8) | 0;
  f = Yb(y | 0, z | 0, 16) | 0;
  e = Yb(y | 0, z | 0, 24) | 0;
  e = e & 255;
  f = f & 255;
  g = g & 255;
 }
 a[h + 21 >> 0] = g;
 a[h + 22 >> 0] = f;
 a[h + 23 >> 0] = e;
 if ((c[b + 108 >> 2] | 0) == 1) {
  s = c[o >> 2] | 0;
  a[s + 36 >> 0] = 1;
  a[s + 37 >> 0] = 0;
 }
 h = c[o >> 2] | 0;
 e = h + 24 | 0;
 if (x) {
  a[e >> 0] = -1;
  e = -1;
  f = -1;
  g = -1;
 } else {
  a[e >> 0] = B;
  g = Yb(B | 0, A | 0, 8) | 0;
  f = Yb(B | 0, A | 0, 16) | 0;
  e = Yb(B | 0, A | 0, 24) | 0;
  e = e & 255;
  f = f & 255;
  g = g & 255;
 }
 a[h + 25 >> 0] = g;
 a[h + 26 >> 0] = f;
 a[h + 27 >> 0] = e;
 e = x ? 8 : 0;
 e = l ? (e & 65535) + 8 & 65535 : e;
 s = b + 128 | 0;
 r = s;
 q = c[r + 4 >> 2] | 0;
 e = q >>> 0 > 0 | (q | 0) == 0 & (c[r >> 2] | 0) >>> 0 > 4294967294 ? e + 8 << 16 >> 16 : e;
 if (e << 16 >> 16 > 0) {
  h = (e << 16 >> 16) + 4 | 0;
  j = b + 148 | 0;
  if (h >>> 0 > (c[j >> 2] | 0) >>> 0) {
   F = -103;
   i = G;
   return F | 0;
  }
  k = b + 144 | 0;
  r = (c[o >> 2] | 0) + (c[k >> 2] | 0) | 0;
  a[r >> 0] = 1;
  a[r + 1 >> 0] = 0;
  r = r + 2 | 0;
  a[r >> 0] = e;
  a[r + 1 >> 0] = (e & 65535) >>> 8;
  e = r + 2 | 0;
  if (x) {
   a[e >> 0] = B;
   r = Yb(B | 0, A | 0, 8) | 0;
   a[e + 1 >> 0] = r;
   r = Yb(B | 0, A | 0, 16) | 0;
   a[e + 2 >> 0] = r;
   r = Yb(B | 0, A | 0, 24) | 0;
   a[e + 3 >> 0] = r;
   a[e + 4 >> 0] = A;
   r = Yb(B | 0, A | 0, 40) | 0;
   a[e + 5 >> 0] = r;
   r = Yb(B | 0, A | 0, 48) | 0;
   a[e + 6 >> 0] = r;
   r = Yb(B | 0, A | 0, 56) | 0;
   a[e + 7 >> 0] = r;
   e = e + 8 | 0;
  }
  if (l) {
   a[e >> 0] = y;
   r = Yb(y | 0, z | 0, 8) | 0;
   a[e + 1 >> 0] = r;
   r = Yb(y | 0, z | 0, 16) | 0;
   a[e + 2 >> 0] = r;
   r = Yb(y | 0, z | 0, 24) | 0;
   a[e + 3 >> 0] = r;
   a[e + 4 >> 0] = z;
   r = Yb(y | 0, z | 0, 40) | 0;
   a[e + 5 >> 0] = r;
   r = Yb(y | 0, z | 0, 48) | 0;
   a[e + 6 >> 0] = r;
   r = Yb(y | 0, z | 0, 56) | 0;
   a[e + 7 >> 0] = r;
   e = e + 8 | 0;
  }
  g = s;
  f = c[g >> 2] | 0;
  g = c[g + 4 >> 2] | 0;
  if (g >>> 0 > 0 | (g | 0) == 0 & f >>> 0 > 4294967294) {
   a[e >> 0] = f;
   r = Yb(f | 0, g | 0, 8) | 0;
   a[e + 1 >> 0] = r;
   r = Yb(f | 0, g | 0, 16) | 0;
   a[e + 2 >> 0] = r;
   r = Yb(f | 0, g | 0, 24) | 0;
   a[e + 3 >> 0] = r;
   a[e + 4 >> 0] = g;
   r = Yb(f | 0, g | 0, 40) | 0;
   a[e + 5 >> 0] = r;
   r = Yb(f | 0, g | 0, 48) | 0;
   a[e + 6 >> 0] = r;
   r = Yb(f | 0, g | 0, 56) | 0;
   a[e + 7 >> 0] = r;
  }
  c[j >> 2] = (c[j >> 2] | 0) - h;
  c[k >> 2] = (c[k >> 2] | 0) + h;
  q = b + 140 | 0;
  r = (c[q >> 2] | 0) + h | 0;
  c[q >> 2] = r;
  q = c[o >> 2] | 0;
  e = q + 30 | 0;
  a[e >> 0] = r;
  a[q + 31 >> 0] = r >>> 8;
  if (r >>> 0 >= 65536) {
   a[e >> 0] = -1;
   a[e + 1 >> 0] = -1 >> 8;
  }
 }
 b : do if (!d) {
  f = b + 48 | 0;
  d = c[o >> 2] | 0;
  h = c[b + 144 >> 2] | 0;
  n = b + 52 | 0;
  e = c[n >> 2] | 0;
  do if (!e) {
   e = Qb(4096) | 0;
   if (!e) {
    c[n >> 2] = 0;
    c[f >> 2] = 0;
    d = -104;
    C = 65;
    break b;
   } else {
    c[e >> 2] = 0;
    c[e + 8 >> 2] = 0;
    c[e + 4 >> 2] = 4080;
    c[n >> 2] = e;
    c[f >> 2] = e;
    break;
   }
  } while (0);
  do if (h) {
   g = e;
   f = c[e + 4 >> 2] | 0;
   while (1) {
    if (!f) {
     e = Qb(4096) | 0;
     if (!e) {
      C = 60;
      break;
     }
     c[e >> 2] = 0;
     c[e + 8 >> 2] = 0;
     c[e + 4 >> 2] = 4080;
     c[g >> 2] = e;
     c[n >> 2] = e;
     f = 4080;
    } else e = g;
    m = e + 4 | 0;
    l = f >>> 0 < h >>> 0 ? f : h;
    k = e + 8 | 0;
    g = c[k >> 2] | 0;
    j = e + 16 + g | 0;
    if (l) {
     f = 0;
     do {
      a[j + f >> 0] = a[d + f >> 0] | 0;
      f = f + 1 | 0;
     } while (f >>> 0 < l >>> 0);
     g = c[k >> 2] | 0;
     f = c[m >> 2] | 0;
    }
    c[k >> 2] = g + l;
    f = f - l | 0;
    c[m >> 2] = f;
    h = h - l | 0;
    if (!h) {
     C = 66;
     break;
    } else {
     d = d + l | 0;
     g = e;
    }
   }
   if ((C | 0) == 60) {
    c[g >> 2] = 0;
    d = -104;
    C = 65;
    break b;
   } else if ((C | 0) == 66) {
    d = c[o >> 2] | 0;
    break;
   }
  } while (0);
  Rb(d);
  n = b + 44 | 0;
  d = c[n >> 2] | 0;
  q = b + 16 | 0;
  r = b + 28 | 0;
  e = c[r >> 2] | 0;
  if (!(c[q >> 2] | 0)) {
   o = Ga[c[b + 36 >> 2] & 7](e, d) | 0;
   p = (o | 0) == -1;
   o = p ? -1 : o;
   p = p ? -1 : 0;
  } else {
   o = Ga[c[b + 12 >> 2] & 7](e, d) | 0;
   p = D;
  }
  h = c[n >> 2] | 0;
  e = s;
  d = b + 65760 | 0;
  f = d;
  f = (c[f >> 2] | 0) != 0 | (c[f + 4 >> 2] | 0) != 0;
  e = Wb((f ? 14 : 20) | 0, (f ? 0 : 0) | 0, c[e >> 2] | 0, c[e + 4 >> 2] | 0) | 0;
  f = D;
  g = c[q >> 2] | 0;
  if (!g) if ((e | 0) == (e | 0) & 0 == (f | 0)) {
   e = Fa[c[b + 40 >> 2] & 3](c[r >> 2] | 0, h, e, 0) | 0;
   C = 74;
  } else g = -1; else {
   e = Ha[g & 1](c[r >> 2] | 0, h, e, f, 0) | 0;
   C = 74;
  }
  if ((C | 0) == 74) if (!e) {
   g = c[n >> 2] | 0;
   a[E >> 0] = u;
   a[E + 1 >> 0] = v;
   a[E + 2 >> 0] = w;
   a[E + 3 >> 0] = t;
   g = ((Fa[c[b + 8 >> 2] & 3](c[r >> 2] | 0, g, E, 4) | 0) != 4) << 31 >> 31;
  } else g = -1;
  do if (x) {
   f = b + 65720 | 0;
   e = c[f >> 2] | 0;
   f = c[f + 4 >> 2] | 0;
   if (!((e | 0) == 0 & (f | 0) == 0)) {
    j = c[n >> 2] | 0;
    e = Wb(e | 0, f | 0, 4, 0) | 0;
    f = D;
    h = c[q >> 2] | 0;
    do if (!h) {
     if (!((e | 0) == (e | 0) & 0 == (f | 0))) {
      e = -1;
      break;
     }
     e = Fa[c[b + 40 >> 2] & 3](c[r >> 2] | 0, j, e, 0) | 0;
    } else e = Ha[h & 1](c[r >> 2] | 0, j, e, f, 0) | 0; while (0);
    if (e | g | 0) {
     g = -1;
     break;
    }
    x = c[n >> 2] | 0;
    a[E >> 0] = B;
    k = Yb(B | 0, A | 0, 8) | 0;
    g = E + 1 | 0;
    a[g >> 0] = k;
    k = Yb(B | 0, A | 0, 16) | 0;
    h = E + 2 | 0;
    a[h >> 0] = k;
    k = Yb(B | 0, A | 0, 24) | 0;
    j = E + 3 | 0;
    a[j >> 0] = k;
    k = E + 4 | 0;
    a[k >> 0] = A;
    f = Yb(B | 0, A | 0, 40) | 0;
    l = E + 5 | 0;
    a[l >> 0] = f;
    f = Yb(B | 0, A | 0, 48) | 0;
    m = E + 6 | 0;
    a[m >> 0] = f;
    f = Yb(B | 0, A | 0, 56) | 0;
    e = E + 7 | 0;
    a[e >> 0] = f;
    f = b + 8 | 0;
    if ((Fa[c[f >> 2] & 3](c[r >> 2] | 0, x, E, 8) | 0) != 8) {
     g = -1;
     break;
    }
    B = c[n >> 2] | 0;
    a[E >> 0] = y;
    A = Yb(y | 0, z | 0, 8) | 0;
    a[g >> 0] = A;
    g = Yb(y | 0, z | 0, 16) | 0;
    a[h >> 0] = g;
    g = Yb(y | 0, z | 0, 24) | 0;
    a[j >> 0] = g;
    a[k >> 0] = z;
    g = Yb(y | 0, z | 0, 40) | 0;
    a[l >> 0] = g;
    g = Yb(y | 0, z | 0, 48) | 0;
    a[m >> 0] = g;
    g = Yb(y | 0, z | 0, 56) | 0;
    a[e >> 0] = g;
    g = ((Fa[c[f >> 2] & 3](c[r >> 2] | 0, B, E, 8) | 0) != 8) << 31 >> 31;
   }
  } else if (!g) {
   e = c[n >> 2] | 0;
   a[E >> 0] = y;
   x = Yb(y | 0, z | 0, 8) | 0;
   g = E + 1 | 0;
   a[g >> 0] = x;
   x = Yb(y | 0, z | 0, 16) | 0;
   h = E + 2 | 0;
   a[h >> 0] = x;
   x = Yb(y | 0, z | 0, 24) | 0;
   j = E + 3 | 0;
   a[j >> 0] = x;
   if (!(z >>> 0 < 1 | (z | 0) == 1 & y >>> 0 < 0)) c[E >> 2] = -1;
   f = b + 8 | 0;
   if ((Fa[c[f >> 2] & 3](c[r >> 2] | 0, e, E, 4) | 0) != 4) {
    g = -1;
    break;
   }
   e = c[n >> 2] | 0;
   a[E >> 0] = B;
   z = Yb(B | 0, A | 0, 8) | 0;
   a[g >> 0] = z;
   z = Yb(B | 0, A | 0, 16) | 0;
   a[h >> 0] = z;
   z = Yb(B | 0, A | 0, 24) | 0;
   a[j >> 0] = z;
   if (!(A >>> 0 < 1 | (A | 0) == 1 & B >>> 0 < 0)) c[E >> 2] = -1;
   g = ((Fa[c[f >> 2] & 3](c[r >> 2] | 0, e, E, 4) | 0) != 4) << 31 >> 31;
  } else g = -1; while (0);
  f = c[n >> 2] | 0;
  e = c[q >> 2] | 0;
  if (!e) if ((o | 0) == (o | 0) & 0 == (p | 0)) e = Fa[c[b + 40 >> 2] & 3](c[r >> 2] | 0, f, o, 0) | 0; else e = -1; else e = Ha[e & 1](c[r >> 2] | 0, f, o, p, 0) | 0;
  e = (e | 0) == 0 ? g : -1;
 } else C = 65; while (0);
 if ((C | 0) == 65) {
  Rb(c[o >> 2] | 0);
  e = d;
  d = b + 65760 | 0;
 }
 E = d;
 E = Wb(c[E >> 2] | 0, c[E + 4 >> 2] | 0, 1, 0) | 0;
 b = d;
 c[b >> 2] = E;
 c[b + 4 >> 2] = D;
 c[F >> 2] = 0;
 F = e;
 i = G;
 return F | 0;
}

function fb(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0;
 y = f + 116 | 0;
 D = (g | 0) == 0;
 E = f + 72 | 0;
 F = f + 88 | 0;
 L = f + 108 | 0;
 J = f + 56 | 0;
 G = f + 84 | 0;
 H = f + 68 | 0;
 p = f + 52 | 0;
 q = f + 64 | 0;
 r = f + 96 | 0;
 s = f + 120 | 0;
 t = f + 112 | 0;
 u = f + 100 | 0;
 I = f + 5792 | 0;
 v = f + 5796 | 0;
 w = f + 5784 | 0;
 x = f + 5788 | 0;
 z = f + 104 | 0;
 K = f + 92 | 0;
 A = f + 128 | 0;
 B = f + 44 | 0;
 C = f + 136 | 0;
 a : while (1) {
  h = c[y >> 2] | 0;
  while (1) {
   if (h >>> 0 < 262) {
    gb(f);
    h = c[y >> 2] | 0;
    if (D & h >>> 0 < 262) {
     h = 0;
     k = 75;
     break a;
    }
    if (!h) {
     k = 48;
     break a;
    }
    if (h >>> 0 > 2) k = 8; else {
     c[s >> 2] = c[r >> 2];
     c[u >> 2] = c[t >> 2];
     c[r >> 2] = 2;
     h = 2;
     k = 16;
    }
   } else k = 8;
   do if ((k | 0) == 8) {
    k = 0;
    h = c[L >> 2] | 0;
    j = ((d[(c[J >> 2] | 0) + (h + 2) >> 0] | 0) ^ c[E >> 2] << c[F >> 2]) & c[G >> 2];
    c[E >> 2] = j;
    j = (c[H >> 2] | 0) + (j << 1) | 0;
    o = b[j >> 1] | 0;
    b[(c[q >> 2] | 0) + ((c[p >> 2] & h) << 1) >> 1] = o;
    i = o & 65535;
    b[j >> 1] = h;
    j = c[r >> 2] | 0;
    c[s >> 2] = j;
    c[u >> 2] = c[t >> 2];
    c[r >> 2] = 2;
    if (!(o << 16 >> 16)) {
     h = 2;
     k = 16;
    } else if (j >>> 0 < (c[A >> 2] | 0) >>> 0) if ((h - i | 0) >>> 0 > ((c[B >> 2] | 0) + -262 | 0) >>> 0) {
     h = 2;
     k = 16;
    } else {
     h = hb(f, i) | 0;
     c[r >> 2] = h;
     if (h >>> 0 < 6) {
      if ((c[C >> 2] | 0) != 1) {
       if ((h | 0) != 3) {
        k = 16;
        break;
       }
       if (((c[L >> 2] | 0) - (c[t >> 2] | 0) | 0) >>> 0 <= 4096) {
        h = 3;
        k = 16;
        break;
       }
      }
      c[r >> 2] = 2;
      h = 2;
      k = 16;
     } else k = 16;
    } else h = 2;
   } while (0);
   if ((k | 0) == 16) j = c[s >> 2] | 0;
   if (!(j >>> 0 < 3 | h >>> 0 > j >>> 0)) break;
   if (!(c[z >> 2] | 0)) {
    c[z >> 2] = 1;
    c[L >> 2] = (c[L >> 2] | 0) + 1;
    h = (c[y >> 2] | 0) + -1 | 0;
    c[y >> 2] = h;
    continue;
   }
   o = a[(c[J >> 2] | 0) + ((c[L >> 2] | 0) + -1) >> 0] | 0;
   n = c[I >> 2] | 0;
   b[(c[v >> 2] | 0) + (n << 1) >> 1] = 0;
   c[I >> 2] = n + 1;
   a[(c[w >> 2] | 0) + n >> 0] = o;
   o = f + 148 + ((o & 255) << 2) | 0;
   b[o >> 1] = (b[o >> 1] | 0) + 1 << 16 >> 16;
   if ((c[I >> 2] | 0) == ((c[x >> 2] | 0) + -1 | 0)) {
    h = c[K >> 2] | 0;
    if ((h | 0) > -1) i = (c[J >> 2] | 0) + h | 0; else i = 0;
    lb(f, i, (c[L >> 2] | 0) - h | 0, 0);
    c[K >> 2] = c[L >> 2];
    l = c[f >> 2] | 0;
    m = c[l + 28 >> 2] | 0;
    h = m + 5820 | 0;
    i = c[h >> 2] | 0;
    do if ((i | 0) == 16) {
     o = m + 5816 | 0;
     n = b[o >> 1] & 255;
     i = m + 20 | 0;
     j = c[i >> 2] | 0;
     c[i >> 2] = j + 1;
     k = m + 8 | 0;
     a[(c[k >> 2] | 0) + j >> 0] = n;
     j = (e[o >> 1] | 0) >>> 8 & 255;
     n = c[i >> 2] | 0;
     c[i >> 2] = n + 1;
     a[(c[k >> 2] | 0) + n >> 0] = j;
     b[o >> 1] = 0;
     c[h >> 2] = 0;
    } else if ((i | 0) > 7) {
     o = m + 5816 | 0;
     k = b[o >> 1] & 255;
     i = m + 20 | 0;
     n = c[i >> 2] | 0;
     c[i >> 2] = n + 1;
     a[(c[m + 8 >> 2] | 0) + n >> 0] = k;
     b[o >> 1] = (e[o >> 1] | 0) >>> 8;
     c[h >> 2] = (c[h >> 2] | 0) + -8;
     break;
    } else {
     i = m + 20 | 0;
     break;
    } while (0);
    h = c[i >> 2] | 0;
    j = l + 16 | 0;
    o = c[j >> 2] | 0;
    h = h >>> 0 > o >>> 0 ? o : h;
    if (h | 0) {
     o = l + 12 | 0;
     k = m + 16 | 0;
     bc(c[o >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
     c[o >> 2] = (c[o >> 2] | 0) + h;
     c[k >> 2] = (c[k >> 2] | 0) + h;
     o = l + 20 | 0;
     c[o >> 2] = (c[o >> 2] | 0) + h;
     c[j >> 2] = (c[j >> 2] | 0) - h;
     o = (c[i >> 2] | 0) - h | 0;
     c[i >> 2] = o;
     if (!o) c[k >> 2] = c[m + 8 >> 2];
    }
   }
   c[L >> 2] = (c[L >> 2] | 0) + 1;
   h = (c[y >> 2] | 0) + -1 | 0;
   c[y >> 2] = h;
   if (!(c[(c[f >> 2] | 0) + 16 >> 2] | 0)) {
    h = 0;
    k = 75;
    break a;
   }
  }
  m = c[L >> 2] | 0;
  o = m + -3 + (c[y >> 2] | 0) | 0;
  n = j + 253 | 0;
  m = m + 65535 - (c[u >> 2] | 0) | 0;
  i = c[I >> 2] | 0;
  b[(c[v >> 2] | 0) + (i << 1) >> 1] = m;
  c[I >> 2] = i + 1;
  a[(c[w >> 2] | 0) + i >> 0] = n;
  n = f + 148 + ((d[17732 + (n & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
  b[n >> 1] = (b[n >> 1] | 0) + 1 << 16 >> 16;
  m = m + 65535 & 65535;
  m = f + 2440 + ((d[17220 + (m >>> 0 < 256 ? m : (m >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
  b[m >> 1] = (b[m >> 1] | 0) + 1 << 16 >> 16;
  m = c[I >> 2] | 0;
  n = c[x >> 2] | 0;
  i = c[s >> 2] | 0;
  c[y >> 2] = 1 - i + (c[y >> 2] | 0);
  l = i + -2 | 0;
  c[s >> 2] = l;
  h = c[L >> 2] | 0;
  j = h;
  do {
   k = j;
   j = j + 1 | 0;
   c[L >> 2] = j;
   if (j >>> 0 <= o >>> 0) {
    k = ((d[(c[J >> 2] | 0) + (k + 3) >> 0] | 0) ^ c[E >> 2] << c[F >> 2]) & c[G >> 2];
    c[E >> 2] = k;
    k = (c[H >> 2] | 0) + (k << 1) | 0;
    b[(c[q >> 2] | 0) + ((c[p >> 2] & j) << 1) >> 1] = b[k >> 1] | 0;
    b[k >> 1] = j;
   }
   l = l + -1 | 0;
   c[s >> 2] = l;
  } while ((l | 0) != 0);
  c[z >> 2] = 0;
  c[r >> 2] = 2;
  j = i + -3 + h + 2 | 0;
  c[L >> 2] = j;
  if ((m | 0) != (n + -1 | 0)) continue;
  h = c[K >> 2] | 0;
  if ((h | 0) > -1) i = (c[J >> 2] | 0) + h | 0; else i = 0;
  lb(f, i, j - h | 0, 0);
  c[K >> 2] = c[L >> 2];
  l = c[f >> 2] | 0;
  m = c[l + 28 >> 2] | 0;
  h = m + 5820 | 0;
  i = c[h >> 2] | 0;
  do if ((i | 0) == 16) {
   o = m + 5816 | 0;
   n = b[o >> 1] & 255;
   i = m + 20 | 0;
   j = c[i >> 2] | 0;
   c[i >> 2] = j + 1;
   k = m + 8 | 0;
   a[(c[k >> 2] | 0) + j >> 0] = n;
   j = (e[o >> 1] | 0) >>> 8 & 255;
   n = c[i >> 2] | 0;
   c[i >> 2] = n + 1;
   a[(c[k >> 2] | 0) + n >> 0] = j;
   b[o >> 1] = 0;
   c[h >> 2] = 0;
  } else if ((i | 0) > 7) {
   o = m + 5816 | 0;
   k = b[o >> 1] & 255;
   i = m + 20 | 0;
   n = c[i >> 2] | 0;
   c[i >> 2] = n + 1;
   a[(c[m + 8 >> 2] | 0) + n >> 0] = k;
   b[o >> 1] = (e[o >> 1] | 0) >>> 8;
   c[h >> 2] = (c[h >> 2] | 0) + -8;
   break;
  } else {
   i = m + 20 | 0;
   break;
  } while (0);
  h = c[i >> 2] | 0;
  j = l + 16 | 0;
  o = c[j >> 2] | 0;
  h = h >>> 0 > o >>> 0 ? o : h;
  if (h | 0) {
   o = l + 12 | 0;
   k = m + 16 | 0;
   bc(c[o >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
   c[o >> 2] = (c[o >> 2] | 0) + h;
   c[k >> 2] = (c[k >> 2] | 0) + h;
   o = l + 20 | 0;
   c[o >> 2] = (c[o >> 2] | 0) + h;
   c[j >> 2] = (c[j >> 2] | 0) - h;
   o = (c[i >> 2] | 0) - h | 0;
   c[i >> 2] = o;
   if (!o) c[k >> 2] = c[m + 8 >> 2];
  }
  if (!(c[(c[f >> 2] | 0) + 16 >> 2] | 0)) {
   h = 0;
   k = 75;
   break;
  }
 }
 if ((k | 0) == 48) {
  if (c[z >> 2] | 0) {
   H = a[(c[J >> 2] | 0) + ((c[L >> 2] | 0) + -1) >> 0] | 0;
   G = c[I >> 2] | 0;
   b[(c[v >> 2] | 0) + (G << 1) >> 1] = 0;
   c[I >> 2] = G + 1;
   a[(c[w >> 2] | 0) + G >> 0] = H;
   H = f + 148 + ((H & 255) << 2) | 0;
   b[H >> 1] = (b[H >> 1] | 0) + 1 << 16 >> 16;
   c[z >> 2] = 0;
  }
  j = c[L >> 2] | 0;
  c[f + 5812 >> 2] = j >>> 0 < 2 ? j : 2;
  if ((g | 0) == 4) {
   i = c[K >> 2] | 0;
   if ((i | 0) > -1) h = (c[J >> 2] | 0) + i | 0; else h = 0;
   lb(f, h, j - i | 0, 1);
   c[K >> 2] = c[L >> 2];
   l = c[f >> 2] | 0;
   m = c[l + 28 >> 2] | 0;
   h = m + 5820 | 0;
   i = c[h >> 2] | 0;
   do if ((i | 0) == 16) {
    L = m + 5816 | 0;
    K = b[L >> 1] & 255;
    i = m + 20 | 0;
    I = c[i >> 2] | 0;
    c[i >> 2] = I + 1;
    J = m + 8 | 0;
    a[(c[J >> 2] | 0) + I >> 0] = K;
    I = (e[L >> 1] | 0) >>> 8 & 255;
    K = c[i >> 2] | 0;
    c[i >> 2] = K + 1;
    a[(c[J >> 2] | 0) + K >> 0] = I;
    b[L >> 1] = 0;
    c[h >> 2] = 0;
   } else if ((i | 0) > 7) {
    L = m + 5816 | 0;
    J = b[L >> 1] & 255;
    i = m + 20 | 0;
    K = c[i >> 2] | 0;
    c[i >> 2] = K + 1;
    a[(c[m + 8 >> 2] | 0) + K >> 0] = J;
    b[L >> 1] = (e[L >> 1] | 0) >>> 8;
    c[h >> 2] = (c[h >> 2] | 0) + -8;
    break;
   } else {
    i = m + 20 | 0;
    break;
   } while (0);
   h = c[i >> 2] | 0;
   j = l + 16 | 0;
   L = c[j >> 2] | 0;
   h = h >>> 0 > L >>> 0 ? L : h;
   if (h | 0) {
    L = l + 12 | 0;
    k = m + 16 | 0;
    bc(c[L >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
    c[L >> 2] = (c[L >> 2] | 0) + h;
    c[k >> 2] = (c[k >> 2] | 0) + h;
    L = l + 20 | 0;
    c[L >> 2] = (c[L >> 2] | 0) + h;
    c[j >> 2] = (c[j >> 2] | 0) - h;
    L = (c[i >> 2] | 0) - h | 0;
    c[i >> 2] = L;
    if (!L) c[k >> 2] = c[m + 8 >> 2];
   }
   f = (c[(c[f >> 2] | 0) + 16 >> 2] | 0) == 0 ? 2 : 3;
   return f | 0;
  }
  if (c[I >> 2] | 0) {
   i = c[K >> 2] | 0;
   if ((i | 0) > -1) h = (c[J >> 2] | 0) + i | 0; else h = 0;
   lb(f, h, j - i | 0, 0);
   c[K >> 2] = c[L >> 2];
   l = c[f >> 2] | 0;
   m = c[l + 28 >> 2] | 0;
   h = m + 5820 | 0;
   i = c[h >> 2] | 0;
   do if ((i | 0) == 16) {
    L = m + 5816 | 0;
    K = b[L >> 1] & 255;
    i = m + 20 | 0;
    I = c[i >> 2] | 0;
    c[i >> 2] = I + 1;
    J = m + 8 | 0;
    a[(c[J >> 2] | 0) + I >> 0] = K;
    I = (e[L >> 1] | 0) >>> 8 & 255;
    K = c[i >> 2] | 0;
    c[i >> 2] = K + 1;
    a[(c[J >> 2] | 0) + K >> 0] = I;
    b[L >> 1] = 0;
    c[h >> 2] = 0;
   } else if ((i | 0) > 7) {
    L = m + 5816 | 0;
    J = b[L >> 1] & 255;
    i = m + 20 | 0;
    K = c[i >> 2] | 0;
    c[i >> 2] = K + 1;
    a[(c[m + 8 >> 2] | 0) + K >> 0] = J;
    b[L >> 1] = (e[L >> 1] | 0) >>> 8;
    c[h >> 2] = (c[h >> 2] | 0) + -8;
    break;
   } else {
    i = m + 20 | 0;
    break;
   } while (0);
   h = c[i >> 2] | 0;
   j = l + 16 | 0;
   L = c[j >> 2] | 0;
   h = h >>> 0 > L >>> 0 ? L : h;
   if (h | 0) {
    L = l + 12 | 0;
    k = m + 16 | 0;
    bc(c[L >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
    c[L >> 2] = (c[L >> 2] | 0) + h;
    c[k >> 2] = (c[k >> 2] | 0) + h;
    L = l + 20 | 0;
    c[L >> 2] = (c[L >> 2] | 0) + h;
    c[j >> 2] = (c[j >> 2] | 0) - h;
    L = (c[i >> 2] | 0) - h | 0;
    c[i >> 2] = L;
    if (!L) c[k >> 2] = c[m + 8 >> 2];
   }
   if (!(c[(c[f >> 2] | 0) + 16 >> 2] | 0)) {
    f = 0;
    return f | 0;
   }
  }
  f = 1;
  return f | 0;
 } else if ((k | 0) == 75) return h | 0;
 return 0;
}

function Ta(d) {
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, E = 0, F = 0, G = 0;
 B = i;
 i = i + 16 | 0;
 w = B;
 if (!d) {
  d = -102;
  i = B;
  return d | 0;
 }
 if ((c[d + 56 >> 2] | 0) == 1) g = Sa(d) | 0; else g = 0;
 A = d + 65768 | 0;
 x = c[A >> 2] | 0;
 z = d + 44 | 0;
 e = c[z >> 2] | 0;
 m = d + 16 | 0;
 y = d + 28 | 0;
 f = c[y >> 2] | 0;
 if (!(c[m >> 2] | 0)) {
  t = Ga[c[d + 36 >> 2] & 7](f, e) | 0;
  u = (t | 0) == -1;
  t = u ? -1 : t;
  u = u ? -1 : 0;
 } else {
  t = Ga[c[d + 12 >> 2] & 7](f, e) | 0;
  u = D;
 }
 l = d + 48 | 0;
 if (!g) {
  e = c[l >> 2] | 0;
  if (!e) {
   f = 0;
   g = 0;
  } else {
   k = d + 8 | 0;
   f = 0;
   g = 0;
   do {
    j = e + 8 | 0;
    h = c[j >> 2] | 0;
    if (!g) if (!h) {
     g = 0;
     h = 0;
    } else {
     g = Fa[c[k >> 2] & 3](c[y >> 2] | 0, c[z >> 2] | 0, e + 16 | 0, h) | 0;
     h = c[j >> 2] | 0;
     g = ((g | 0) != (h | 0)) << 31 >> 31;
    }
    f = h + f | 0;
    e = c[e >> 2] | 0;
   } while ((e | 0) != 0);
   v = 14;
  }
 } else {
  f = 0;
  v = 14;
 }
 if ((v | 0) == 14) {
  e = c[l >> 2] | 0;
  if (e) do {
   s = e;
   e = c[e >> 2] | 0;
   Rb(s);
  } while ((e | 0) != 0);
 }
 c[d + 52 >> 2] = 0;
 c[l >> 2] = 0;
 s = d + 65752 | 0;
 r = s;
 r = Vb(t | 0, u | 0, c[r >> 2] | 0, c[r + 4 >> 2] | 0) | 0;
 q = D;
 if (q >>> 0 > 0 | (q | 0) == 0 & r >>> 0 > 4294967294) {
  e = c[z >> 2] | 0;
  h = c[y >> 2] | 0;
  if (!(c[m >> 2] | 0)) {
   p = Ga[c[d + 36 >> 2] & 7](h, e) | 0;
   q = (p | 0) == -1;
   p = q ? -1 : p;
   q = q ? -1 : 0;
  } else {
   p = Ga[c[d + 12 >> 2] & 7](h, e) | 0;
   q = D;
  }
  o = c[z >> 2] | 0;
  a[w >> 0] = 80;
  h = w + 1 | 0;
  a[h >> 0] = 75;
  j = w + 2 | 0;
  a[j >> 0] = 6;
  k = w + 3 | 0;
  a[k >> 0] = 6;
  r = d + 8 | 0;
  if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, o, w, 4) | 0) == 4) {
   e = c[z >> 2] | 0;
   a[w >> 0] = 44;
   l = w + 4 | 0;
   m = w + 5 | 0;
   n = w + 6 | 0;
   o = w + 7 | 0;
   a[h >> 0] = 0;
   a[h + 1 >> 0] = 0;
   a[h + 2 >> 0] = 0;
   a[h + 3 >> 0] = 0;
   a[h + 4 >> 0] = 0;
   a[h + 5 >> 0] = 0;
   a[h + 6 >> 0] = 0;
   if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, e, w, 8) | 0) == 8) {
    e = c[z >> 2] | 0;
    a[w >> 0] = 45;
    a[h >> 0] = 0;
    if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, e, w, 2) | 0) == 2) {
     e = c[z >> 2] | 0;
     a[w >> 0] = 45;
     a[h >> 0] = 0;
     if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, e, w, 2) | 0) == 2) {
      e = c[z >> 2] | 0;
      c[w >> 2] = 0;
      if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, e, w, 4) | 0) == 4) {
       e = c[z >> 2] | 0;
       c[w >> 2] = 0;
       if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, e, w, 4) | 0) == 4) {
        C = c[z >> 2] | 0;
        e = d + 65760 | 0;
        E = e;
        F = c[E >> 2] | 0;
        E = c[E + 4 >> 2] | 0;
        a[w >> 0] = F;
        G = Yb(F | 0, E | 0, 8) | 0;
        a[h >> 0] = G;
        G = Yb(F | 0, E | 0, 16) | 0;
        a[j >> 0] = G;
        G = Yb(F | 0, E | 0, 24) | 0;
        a[k >> 0] = G;
        a[l >> 0] = E;
        G = Yb(F | 0, E | 0, 40) | 0;
        a[m >> 0] = G;
        G = Yb(F | 0, E | 0, 48) | 0;
        a[n >> 0] = G;
        E = Yb(F | 0, E | 0, 56) | 0;
        a[o >> 0] = E;
        if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, C, w, 8) | 0) == 8) {
         G = c[z >> 2] | 0;
         F = e;
         E = c[F >> 2] | 0;
         F = c[F + 4 >> 2] | 0;
         a[w >> 0] = E;
         C = Yb(E | 0, F | 0, 8) | 0;
         a[h >> 0] = C;
         C = Yb(E | 0, F | 0, 16) | 0;
         a[j >> 0] = C;
         C = Yb(E | 0, F | 0, 24) | 0;
         a[k >> 0] = C;
         a[l >> 0] = F;
         C = Yb(E | 0, F | 0, 40) | 0;
         a[m >> 0] = C;
         C = Yb(E | 0, F | 0, 48) | 0;
         a[n >> 0] = C;
         F = Yb(E | 0, F | 0, 56) | 0;
         a[o >> 0] = F;
         if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 8) | 0) == 8) {
          G = c[z >> 2] | 0;
          a[w >> 0] = f;
          a[h >> 0] = f >>> 8;
          a[j >> 0] = f >>> 16;
          a[k >> 0] = f >>> 24;
          c[l >> 2] = 0;
          if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 8) | 0) == 8) {
           E = s;
           E = Vb(t | 0, u | 0, c[E >> 2] | 0, c[E + 4 >> 2] | 0) | 0;
           F = D;
           G = c[z >> 2] | 0;
           a[w >> 0] = E;
           C = Yb(E | 0, F | 0, 8) | 0;
           a[h >> 0] = C;
           C = Yb(E | 0, F | 0, 16) | 0;
           a[j >> 0] = C;
           C = Yb(E | 0, F | 0, 24) | 0;
           a[k >> 0] = C;
           a[l >> 0] = F;
           C = Yb(E | 0, F | 0, 40) | 0;
           a[m >> 0] = C;
           C = Yb(E | 0, F | 0, 48) | 0;
           a[n >> 0] = C;
           F = Yb(E | 0, F | 0, 56) | 0;
           a[o >> 0] = F;
           Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 8) | 0;
          }
         }
        }
       }
      }
     }
    }
   }
  }
  e = s;
  h = c[e >> 2] | 0;
  e = c[e + 4 >> 2] | 0;
  G = c[z >> 2] | 0;
  a[w >> 0] = 80;
  j = w + 1 | 0;
  a[j >> 0] = 75;
  k = w + 2 | 0;
  a[k >> 0] = 6;
  l = w + 3 | 0;
  a[l >> 0] = 7;
  e = Vb(p | 0, q | 0, h | 0, e | 0) | 0;
  h = D;
  if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 4) | 0) == 4) {
   G = c[z >> 2] | 0;
   c[w >> 2] = 0;
   if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 4) | 0) == 4) {
    G = c[z >> 2] | 0;
    a[w >> 0] = e;
    F = Yb(e | 0, h | 0, 8) | 0;
    a[j >> 0] = F;
    F = Yb(e | 0, h | 0, 16) | 0;
    a[k >> 0] = F;
    F = Yb(e | 0, h | 0, 24) | 0;
    a[l >> 0] = F;
    a[w + 4 >> 0] = h;
    F = Yb(e | 0, h | 0, 40) | 0;
    a[w + 5 >> 0] = F;
    F = Yb(e | 0, h | 0, 48) | 0;
    a[w + 6 >> 0] = F;
    F = Yb(e | 0, h | 0, 56) | 0;
    a[w + 7 >> 0] = F;
    if ((Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 8) | 0) == 8) {
     G = c[z >> 2] | 0;
     a[w >> 0] = 1;
     a[j >> 0] = 0;
     a[k >> 0] = 0;
     a[l >> 0] = 0;
     Fa[c[r >> 2] & 3](c[y >> 2] | 0, G, w, 4) | 0;
    }
   }
  }
 }
 if (!g) {
  G = c[z >> 2] | 0;
  a[w >> 0] = 84;
  k = w + 1 | 0;
  a[k >> 0] = 73;
  l = w + 2 | 0;
  a[l >> 0] = 80;
  m = w + 3 | 0;
  a[m >> 0] = 68;
  n = d + 8 | 0;
  if ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, G, w, 4) | 0) == 4) {
   G = c[z >> 2] | 0;
   a[w >> 0] = 0;
   a[k >> 0] = 0;
   if ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, G, w, 2) | 0) == 2) {
    G = c[z >> 2] | 0;
    a[w >> 0] = 0;
    a[k >> 0] = 0;
    if ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, G, w, 2) | 0) == 2) {
     j = d + 65760 | 0;
     g = j;
     e = c[g >> 2] | 0;
     g = c[g + 4 >> 2] | 0;
     h = c[z >> 2] | 0;
     if (g >>> 0 > 0 | (g | 0) == 0 & e >>> 0 > 65534) {
      a[w >> 0] = -1;
      a[k >> 0] = -1;
      e = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, h, w, 2) | 0) != 2) << 31 >> 31;
     } else {
      a[w >> 0] = e;
      G = Yb(e | 0, g | 0, 8) | 0;
      a[k >> 0] = G;
      if (!((e & -65536 | 0) == 0 & 0 == 0)) b[w >> 1] = -1;
      e = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, h, w, 2) | 0) != 2) << 31 >> 31;
     }
     if (!e) {
      g = j;
      e = c[g >> 2] | 0;
      g = c[g + 4 >> 2] | 0;
      h = c[z >> 2] | 0;
      if (g >>> 0 > 0 | (g | 0) == 0 & e >>> 0 > 65534) {
       a[w >> 0] = -1;
       a[k >> 0] = -1;
       e = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, h, w, 2) | 0) != 2) << 31 >> 31;
      } else {
       a[w >> 0] = e;
       G = Yb(e | 0, g | 0, 8) | 0;
       a[k >> 0] = G;
       if (!((e & -65536 | 0) == 0 & 0 == 0)) b[w >> 1] = -1;
       e = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, h, w, 2) | 0) != 2) << 31 >> 31;
      }
      if (!e) {
       G = c[z >> 2] | 0;
       a[w >> 0] = f;
       a[k >> 0] = f >>> 8;
       a[l >> 0] = f >>> 16;
       a[m >> 0] = f >>> 24;
       if ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, G, w, 4) | 0) == 4) {
        e = s;
        e = Vb(t | 0, u | 0, c[e >> 2] | 0, c[e + 4 >> 2] | 0) | 0;
        f = D;
        g = c[z >> 2] | 0;
        if (f >>> 0 > 0 | (f | 0) == 0 & e >>> 0 > 4294967294) {
         c[w >> 2] = -1;
         g = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, g, w, 4) | 0) != 4) << 31 >> 31;
        } else {
         a[w >> 0] = e;
         G = Yb(e | 0, f | 0, 8) | 0;
         a[k >> 0] = G;
         G = Yb(e | 0, f | 0, 16) | 0;
         a[l >> 0] = G;
         G = Yb(e | 0, f | 0, 24) | 0;
         a[m >> 0] = G;
         g = ((Fa[c[n >> 2] & 3](c[y >> 2] | 0, g, w, 4) | 0) != 4) << 31 >> 31;
        }
        if (!g) {
         if (!x) f = 0; else {
          g = x;
          a : do if (!(g & 3)) {
           e = x;
           v = 59;
          } else {
           e = x;
           f = g;
           while (1) {
            if (!(a[e >> 0] | 0)) {
             e = f;
             break a;
            }
            e = e + 1 | 0;
            f = e;
            if (!(f & 3)) {
             v = 59;
             break;
            }
           }
          } while (0);
          if ((v | 0) == 59) {
           while (1) {
            f = c[e >> 2] | 0;
            if (!((f & -2139062144 ^ -2139062144) & f + -16843009)) e = e + 4 | 0; else break;
           }
           if ((f & 255) << 24 >> 24) do e = e + 1 | 0; while ((a[e >> 0] | 0) != 0);
          }
          f = e - g | 0;
         }
         e = c[z >> 2] | 0;
         a[w >> 0] = f;
         a[w + 1 >> 0] = f >>> 8;
         if (f >>> 0 >= 65536) b[w >> 1] = -1;
         G = (Fa[c[n >> 2] & 3](c[y >> 2] | 0, e, w, 2) | 0) != 2;
         g = G << 31 >> 31;
         if ((f | 0) != 0 & (G ^ 1)) {
          G = (Fa[c[n >> 2] & 3](c[y >> 2] | 0, c[z >> 2] | 0, x, f) | 0) == (f | 0);
          g = G ? g : -1;
         }
        }
       } else g = -1;
      } else g = -1;
     } else g = -1;
    } else g = -1;
   } else g = -1;
  } else g = -1;
 }
 f = (g | 0) == 0 & (Ga[c[d + 20 >> 2] & 7](c[y >> 2] | 0, c[z >> 2] | 0) | 0) != 0;
 e = c[A >> 2] | 0;
 if (e | 0) Rb(e);
 Rb(d);
 G = f ? -1 : g;
 i = B;
 return G | 0;
}

function mb(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0;
 C = i;
 i = i + 32 | 0;
 A = C;
 B = c[g >> 2] | 0;
 x = g + 8 | 0;
 t = c[x >> 2] | 0;
 m = c[t >> 2] | 0;
 t = c[t + 12 >> 2] | 0;
 w = f + 5200 | 0;
 c[w >> 2] = 0;
 y = f + 5204 | 0;
 c[y >> 2] = 573;
 if ((t | 0) > 0) {
  h = -1;
  j = 0;
  do {
   if (!(b[B + (j << 2) >> 1] | 0)) b[B + (j << 2) + 2 >> 1] = 0; else {
    h = (c[w >> 2] | 0) + 1 | 0;
    c[w >> 2] = h;
    c[f + 2908 + (h << 2) >> 2] = j;
    a[f + 5208 + j >> 0] = 0;
    h = j;
   }
   j = j + 1 | 0;
  } while ((j | 0) != (t | 0));
  j = c[w >> 2] | 0;
  if ((j | 0) < 2) k = 3; else z = h;
 } else {
  h = -1;
  j = 0;
  k = 3;
 }
 if ((k | 0) == 3) {
  l = f + 5800 | 0;
  k = f + 5804 | 0;
  if (!m) {
   do {
    v = (h | 0) < 2;
    z = h + 1 | 0;
    h = v ? z : h;
    z = v ? z : 0;
    j = j + 1 | 0;
    c[w >> 2] = j;
    c[f + 2908 + (j << 2) >> 2] = z;
    b[B + (z << 2) >> 1] = 1;
    a[f + 5208 + z >> 0] = 0;
    c[l >> 2] = (c[l >> 2] | 0) + -1;
    j = c[w >> 2] | 0;
   } while ((j | 0) < 2);
   z = h;
  } else {
   do {
    v = (h | 0) < 2;
    z = h + 1 | 0;
    h = v ? z : h;
    z = v ? z : 0;
    j = j + 1 | 0;
    c[w >> 2] = j;
    c[f + 2908 + (j << 2) >> 2] = z;
    b[B + (z << 2) >> 1] = 1;
    a[f + 5208 + z >> 0] = 0;
    c[l >> 2] = (c[l >> 2] | 0) + -1;
    c[k >> 2] = (c[k >> 2] | 0) - (e[m + (z << 2) + 2 >> 1] | 0);
    j = c[w >> 2] | 0;
   } while ((j | 0) < 2);
   z = h;
  }
 }
 v = g + 4 | 0;
 c[v >> 2] = z;
 s = (j | 0) / 2 | 0;
 while (1) {
  r = c[f + 2908 + (s << 2) >> 2] | 0;
  p = f + 5208 + r | 0;
  k = s << 1;
  a : do if ((k | 0) > (j | 0)) h = s; else {
   q = B + (r << 2) | 0;
   h = s;
   while (1) {
    do if ((k | 0) < (j | 0)) {
     m = k | 1;
     j = c[f + 2908 + (m << 2) >> 2] | 0;
     l = b[B + (j << 2) >> 1] | 0;
     n = c[f + 2908 + (k << 2) >> 2] | 0;
     o = b[B + (n << 2) >> 1] | 0;
     if ((l & 65535) >= (o & 65535)) {
      if (l << 16 >> 16 != o << 16 >> 16) {
       m = k;
       break;
      }
      if ((d[f + 5208 + j >> 0] | 0) > (d[f + 5208 + n >> 0] | 0)) {
       m = k;
       break;
      }
     }
    } else m = k; while (0);
    j = b[q >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[B + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break a;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[p >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break a;
    c[f + 2908 + (h << 2) >> 2] = k;
    k = m << 1;
    j = c[w >> 2] | 0;
    if ((k | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = r;
  if ((s | 0) <= 1) break;
  s = s + -1 | 0;
  j = c[w >> 2] | 0;
 }
 u = f + 2912 | 0;
 h = c[w >> 2] | 0;
 do {
  s = c[u >> 2] | 0;
  j = h + -1 | 0;
  c[w >> 2] = j;
  r = c[f + 2908 + (h << 2) >> 2] | 0;
  c[u >> 2] = r;
  q = f + 5208 + r | 0;
  b : do if ((h | 0) < 3) h = 1; else {
   p = B + (r << 2) | 0;
   h = 1;
   o = 2;
   while (1) {
    do if ((o | 0) < (j | 0)) {
     m = o | 1;
     j = c[f + 2908 + (m << 2) >> 2] | 0;
     k = b[B + (j << 2) >> 1] | 0;
     l = c[f + 2908 + (o << 2) >> 2] | 0;
     n = b[B + (l << 2) >> 1] | 0;
     if ((k & 65535) >= (n & 65535)) {
      if (k << 16 >> 16 != n << 16 >> 16) {
       m = o;
       break;
      }
      if ((d[f + 5208 + j >> 0] | 0) > (d[f + 5208 + l >> 0] | 0)) {
       m = o;
       break;
      }
     }
    } else m = o; while (0);
    j = b[p >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[B + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break b;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[q >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break b;
    c[f + 2908 + (h << 2) >> 2] = k;
    o = m << 1;
    j = c[w >> 2] | 0;
    if ((o | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = r;
  r = c[u >> 2] | 0;
  p = (c[y >> 2] | 0) + -1 | 0;
  c[y >> 2] = p;
  c[f + 2908 + (p << 2) >> 2] = s;
  p = (c[y >> 2] | 0) + -1 | 0;
  c[y >> 2] = p;
  c[f + 2908 + (p << 2) >> 2] = r;
  p = B + (t << 2) | 0;
  b[p >> 1] = (e[B + (r << 2) >> 1] | 0) + (e[B + (s << 2) >> 1] | 0);
  j = a[f + 5208 + s >> 0] | 0;
  o = a[f + 5208 + r >> 0] | 0;
  q = f + 5208 + t | 0;
  a[q >> 0] = (((j & 255) < (o & 255) ? o : j) & 255) + 1;
  j = t & 65535;
  b[B + (r << 2) + 2 >> 1] = j;
  b[B + (s << 2) + 2 >> 1] = j;
  c[u >> 2] = t;
  j = c[w >> 2] | 0;
  c : do if ((j | 0) < 2) h = 1; else {
   h = 1;
   o = 2;
   while (1) {
    do if ((o | 0) < (j | 0)) {
     m = o | 1;
     j = c[f + 2908 + (m << 2) >> 2] | 0;
     k = b[B + (j << 2) >> 1] | 0;
     l = c[f + 2908 + (o << 2) >> 2] | 0;
     n = b[B + (l << 2) >> 1] | 0;
     if ((k & 65535) >= (n & 65535)) {
      if (k << 16 >> 16 != n << 16 >> 16) {
       m = o;
       break;
      }
      if ((d[f + 5208 + j >> 0] | 0) > (d[f + 5208 + l >> 0] | 0)) {
       m = o;
       break;
      }
     }
    } else m = o; while (0);
    j = b[p >> 1] | 0;
    k = c[f + 2908 + (m << 2) >> 2] | 0;
    l = b[B + (k << 2) >> 1] | 0;
    if ((j & 65535) < (l & 65535)) break c;
    if (j << 16 >> 16 == l << 16 >> 16) if ((d[q >> 0] | 0) <= (d[f + 5208 + k >> 0] | 0)) break c;
    c[f + 2908 + (h << 2) >> 2] = k;
    o = m << 1;
    j = c[w >> 2] | 0;
    if ((o | 0) > (j | 0)) {
     h = m;
     break;
    } else h = m;
   }
  } while (0);
  c[f + 2908 + (h << 2) >> 2] = t;
  t = t + 1 | 0;
  h = c[w >> 2] | 0;
 } while ((h | 0) > 1);
 t = c[u >> 2] | 0;
 u = (c[y >> 2] | 0) + -1 | 0;
 c[y >> 2] = u;
 c[f + 2908 + (u << 2) >> 2] = t;
 u = c[g >> 2] | 0;
 t = c[v >> 2] | 0;
 o = c[x >> 2] | 0;
 p = c[o >> 2] | 0;
 q = c[o + 4 >> 2] | 0;
 r = c[o + 8 >> 2] | 0;
 o = c[o + 16 >> 2] | 0;
 h = f + 2876 | 0;
 j = h + 32 | 0;
 do {
  b[h >> 1] = 0;
  h = h + 2 | 0;
 } while ((h | 0) < (j | 0));
 h = c[y >> 2] | 0;
 b[u + (c[f + 2908 + (h << 2) >> 2] << 2) + 2 >> 1] = 0;
 h = h + 1 | 0;
 d : do if ((h | 0) < 573) {
  s = f + 5800 | 0;
  n = f + 5804 | 0;
  if (!p) {
   l = h;
   h = 0;
   do {
    m = c[f + 2908 + (l << 2) >> 2] | 0;
    y = u + (m << 2) + 2 | 0;
    k = e[u + (e[y >> 1] << 2) + 2 >> 1] | 0;
    x = (k | 0) < (o | 0);
    k = x ? k + 1 | 0 : o;
    h = (x & 1 ^ 1) + h | 0;
    b[y >> 1] = k;
    if ((m | 0) <= (t | 0)) {
     y = f + 2876 + (k << 1) | 0;
     b[y >> 1] = (b[y >> 1] | 0) + 1 << 16 >> 16;
     if ((m | 0) < (r | 0)) j = 0; else j = c[q + (m - r << 2) >> 2] | 0;
     y = S(e[u + (m << 2) >> 1] | 0, j + k | 0) | 0;
     c[s >> 2] = y + (c[s >> 2] | 0);
    }
    l = l + 1 | 0;
   } while ((l | 0) != 573);
  } else {
   l = h;
   h = 0;
   do {
    m = c[f + 2908 + (l << 2) >> 2] | 0;
    y = u + (m << 2) + 2 | 0;
    k = e[u + (e[y >> 1] << 2) + 2 >> 1] | 0;
    x = (k | 0) < (o | 0);
    k = x ? k + 1 | 0 : o;
    h = (x & 1 ^ 1) + h | 0;
    b[y >> 1] = k;
    if ((m | 0) <= (t | 0)) {
     y = f + 2876 + (k << 1) | 0;
     b[y >> 1] = (b[y >> 1] | 0) + 1 << 16 >> 16;
     if ((m | 0) < (r | 0)) j = 0; else j = c[q + (m - r << 2) >> 2] | 0;
     y = e[u + (m << 2) >> 1] | 0;
     x = S(y, j + k | 0) | 0;
     c[s >> 2] = x + (c[s >> 2] | 0);
     y = S((e[p + (m << 2) + 2 >> 1] | 0) + j | 0, y) | 0;
     c[n >> 2] = y + (c[n >> 2] | 0);
    }
    l = l + 1 | 0;
   } while ((l | 0) != 573);
  }
  if (h | 0) {
   n = f + 2876 + (o << 1) | 0;
   while (1) {
    k = o;
    while (1) {
     j = k + -1 | 0;
     l = f + 2876 + (j << 1) | 0;
     m = b[l >> 1] | 0;
     if (!(m << 16 >> 16)) k = j; else break;
    }
    b[l >> 1] = m + -1 << 16 >> 16;
    j = f + 2876 + (k << 1) | 0;
    b[j >> 1] = (e[j >> 1] | 0) + 2;
    j = (b[n >> 1] | 0) + -1 << 16 >> 16;
    b[n >> 1] = j;
    if ((h | 0) > 2) h = h + -2 | 0; else break;
   }
   if (o | 0) {
    h = 573;
    while (1) {
     n = o & 65535;
     if (j << 16 >> 16) {
      m = j & 65535;
      do {
       do {
        h = h + -1 | 0;
        j = c[f + 2908 + (h << 2) >> 2] | 0;
       } while ((j | 0) > (t | 0));
       k = u + (j << 2) + 2 | 0;
       l = e[k >> 1] | 0;
       if ((o | 0) != (l | 0)) {
        y = S(e[u + (j << 2) >> 1] | 0, o - l | 0) | 0;
        c[s >> 2] = y + (c[s >> 2] | 0);
        b[k >> 1] = n;
       }
       m = m + -1 | 0;
      } while ((m | 0) != 0);
     }
     j = o + -1 | 0;
     if (!j) break d;
     o = j;
     j = b[f + 2876 + (j << 1) >> 1] | 0;
    }
   }
  }
 } while (0);
 h = 0;
 j = 1;
 do {
  h = (e[f + 2876 + (j + -1 << 1) >> 1] | 0) + (h & 65534) << 1;
  b[A + (j << 1) >> 1] = h;
  j = j + 1 | 0;
 } while ((j | 0) != 16);
 if ((z | 0) < 0) {
  i = C;
  return;
 } else l = 0;
 while (1) {
  f = b[B + (l << 2) + 2 >> 1] | 0;
  h = f & 65535;
  if (f << 16 >> 16) {
   j = A + (h << 1) | 0;
   k = b[j >> 1] | 0;
   b[j >> 1] = k + 1 << 16 >> 16;
   j = 0;
   k = k & 65535;
   while (1) {
    j = j | k & 1;
    if ((h | 0) > 1) {
     j = j << 1;
     h = h + -1 | 0;
     k = k >>> 1;
    } else break;
   }
   b[B + (l << 2) >> 1] = j;
  }
  if ((l | 0) == (z | 0)) break; else l = l + 1 | 0;
 }
 i = C;
 return;
}

function Rb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!a) return;
 d = a + -8 | 0;
 h = c[5139] | 0;
 if (d >>> 0 < h >>> 0) ma();
 a = c[a + -4 >> 2] | 0;
 b = a & 3;
 if ((b | 0) == 1) ma();
 e = a & -8;
 n = d + e | 0;
 do if (!(a & 1)) {
  a = c[d >> 2] | 0;
  if (!b) return;
  k = d + (0 - a) | 0;
  j = a + e | 0;
  if (k >>> 0 < h >>> 0) ma();
  if ((k | 0) == (c[5140] | 0)) {
   a = n + 4 | 0;
   b = c[a >> 2] | 0;
   if ((b & 3 | 0) != 3) {
    q = k;
    f = j;
    break;
   }
   c[5137] = j;
   c[a >> 2] = b & -2;
   c[k + 4 >> 2] = j | 1;
   c[k + j >> 2] = j;
   return;
  }
  e = a >>> 3;
  if (a >>> 0 < 256) {
   b = c[k + 8 >> 2] | 0;
   d = c[k + 12 >> 2] | 0;
   a = 20580 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < h >>> 0) ma();
    if ((c[b + 12 >> 2] | 0) != (k | 0)) ma();
   }
   if ((d | 0) == (b | 0)) {
    c[5135] = c[5135] & ~(1 << e);
    q = k;
    f = j;
    break;
   }
   if ((d | 0) == (a | 0)) g = d + 8 | 0; else {
    if (d >>> 0 < h >>> 0) ma();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) g = a; else ma();
   }
   c[b + 12 >> 2] = d;
   c[g >> 2] = b;
   q = k;
   f = j;
   break;
  }
  g = c[k + 24 >> 2] | 0;
  d = c[k + 12 >> 2] | 0;
  do if ((d | 0) == (k | 0)) {
   d = k + 16 | 0;
   b = d + 4 | 0;
   a = c[b >> 2] | 0;
   if (!a) {
    a = c[d >> 2] | 0;
    if (!a) {
     i = 0;
     break;
    } else b = d;
   }
   while (1) {
    d = a + 20 | 0;
    e = c[d >> 2] | 0;
    if (e | 0) {
     a = e;
     b = d;
     continue;
    }
    d = a + 16 | 0;
    e = c[d >> 2] | 0;
    if (!e) break; else {
     a = e;
     b = d;
    }
   }
   if (b >>> 0 < h >>> 0) ma(); else {
    c[b >> 2] = 0;
    i = a;
    break;
   }
  } else {
   e = c[k + 8 >> 2] | 0;
   if (e >>> 0 < h >>> 0) ma();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (k | 0)) ma();
   b = d + 8 | 0;
   if ((c[b >> 2] | 0) == (k | 0)) {
    c[a >> 2] = d;
    c[b >> 2] = e;
    i = d;
    break;
   } else ma();
  } while (0);
  if (!g) {
   q = k;
   f = j;
  } else {
   a = c[k + 28 >> 2] | 0;
   b = 20844 + (a << 2) | 0;
   if ((k | 0) == (c[b >> 2] | 0)) {
    c[b >> 2] = i;
    if (!i) {
     c[5136] = c[5136] & ~(1 << a);
     q = k;
     f = j;
     break;
    }
   } else {
    if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (k | 0)) c[a >> 2] = i; else c[g + 20 >> 2] = i;
    if (!i) {
     q = k;
     f = j;
     break;
    }
   }
   d = c[5139] | 0;
   if (i >>> 0 < d >>> 0) ma();
   c[i + 24 >> 2] = g;
   a = k + 16 | 0;
   b = c[a >> 2] | 0;
   do if (b | 0) if (b >>> 0 < d >>> 0) ma(); else {
    c[i + 16 >> 2] = b;
    c[b + 24 >> 2] = i;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    q = k;
    f = j;
   } else if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
    c[i + 20 >> 2] = a;
    c[a + 24 >> 2] = i;
    q = k;
    f = j;
    break;
   }
  }
 } else {
  q = d;
  f = e;
 } while (0);
 if (q >>> 0 >= n >>> 0) ma();
 a = n + 4 | 0;
 b = c[a >> 2] | 0;
 if (!(b & 1)) ma();
 if (!(b & 2)) {
  if ((n | 0) == (c[5141] | 0)) {
   p = (c[5138] | 0) + f | 0;
   c[5138] = p;
   c[5141] = q;
   c[q + 4 >> 2] = p | 1;
   if ((q | 0) != (c[5140] | 0)) return;
   c[5140] = 0;
   c[5137] = 0;
   return;
  }
  if ((n | 0) == (c[5140] | 0)) {
   p = (c[5137] | 0) + f | 0;
   c[5137] = p;
   c[5140] = q;
   c[q + 4 >> 2] = p | 1;
   c[q + p >> 2] = p;
   return;
  }
  f = (b & -8) + f | 0;
  e = b >>> 3;
  do if (b >>> 0 < 256) {
   b = c[n + 8 >> 2] | 0;
   d = c[n + 12 >> 2] | 0;
   a = 20580 + (e << 1 << 2) | 0;
   if ((b | 0) != (a | 0)) {
    if (b >>> 0 < (c[5139] | 0) >>> 0) ma();
    if ((c[b + 12 >> 2] | 0) != (n | 0)) ma();
   }
   if ((d | 0) == (b | 0)) {
    c[5135] = c[5135] & ~(1 << e);
    break;
   }
   if ((d | 0) == (a | 0)) l = d + 8 | 0; else {
    if (d >>> 0 < (c[5139] | 0) >>> 0) ma();
    a = d + 8 | 0;
    if ((c[a >> 2] | 0) == (n | 0)) l = a; else ma();
   }
   c[b + 12 >> 2] = d;
   c[l >> 2] = b;
  } else {
   g = c[n + 24 >> 2] | 0;
   a = c[n + 12 >> 2] | 0;
   do if ((a | 0) == (n | 0)) {
    d = n + 16 | 0;
    b = d + 4 | 0;
    a = c[b >> 2] | 0;
    if (!a) {
     a = c[d >> 2] | 0;
     if (!a) {
      m = 0;
      break;
     } else b = d;
    }
    while (1) {
     d = a + 20 | 0;
     e = c[d >> 2] | 0;
     if (e | 0) {
      a = e;
      b = d;
      continue;
     }
     d = a + 16 | 0;
     e = c[d >> 2] | 0;
     if (!e) break; else {
      a = e;
      b = d;
     }
    }
    if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
     c[b >> 2] = 0;
     m = a;
     break;
    }
   } else {
    b = c[n + 8 >> 2] | 0;
    if (b >>> 0 < (c[5139] | 0) >>> 0) ma();
    d = b + 12 | 0;
    if ((c[d >> 2] | 0) != (n | 0)) ma();
    e = a + 8 | 0;
    if ((c[e >> 2] | 0) == (n | 0)) {
     c[d >> 2] = a;
     c[e >> 2] = b;
     m = a;
     break;
    } else ma();
   } while (0);
   if (g | 0) {
    a = c[n + 28 >> 2] | 0;
    b = 20844 + (a << 2) | 0;
    if ((n | 0) == (c[b >> 2] | 0)) {
     c[b >> 2] = m;
     if (!m) {
      c[5136] = c[5136] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (n | 0)) c[a >> 2] = m; else c[g + 20 >> 2] = m;
     if (!m) break;
    }
    d = c[5139] | 0;
    if (m >>> 0 < d >>> 0) ma();
    c[m + 24 >> 2] = g;
    a = n + 16 | 0;
    b = c[a >> 2] | 0;
    do if (b | 0) if (b >>> 0 < d >>> 0) ma(); else {
     c[m + 16 >> 2] = b;
     c[b + 24 >> 2] = m;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
     c[m + 20 >> 2] = a;
     c[a + 24 >> 2] = m;
     break;
    }
   }
  } while (0);
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
  if ((q | 0) == (c[5140] | 0)) {
   c[5137] = f;
   return;
  }
 } else {
  c[a >> 2] = b & -2;
  c[q + 4 >> 2] = f | 1;
  c[q + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  d = 20580 + (a << 1 << 2) | 0;
  b = c[5135] | 0;
  a = 1 << a;
  if (!(b & a)) {
   c[5135] = b | a;
   o = d;
   p = d + 8 | 0;
  } else {
   a = d + 8 | 0;
   b = c[a >> 2] | 0;
   if (b >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
    o = b;
    p = a;
   }
  }
  c[p >> 2] = q;
  c[o + 12 >> 2] = q;
  c[q + 8 >> 2] = o;
  c[q + 12 >> 2] = d;
  return;
 }
 a = f >>> 8;
 if (!a) a = 0; else if (f >>> 0 > 16777215) a = 31; else {
  o = (a + 1048320 | 0) >>> 16 & 8;
  p = a << o;
  n = (p + 520192 | 0) >>> 16 & 4;
  p = p << n;
  a = (p + 245760 | 0) >>> 16 & 2;
  a = 14 - (n | o | a) + (p << a >>> 15) | 0;
  a = f >>> (a + 7 | 0) & 1 | a << 1;
 }
 e = 20844 + (a << 2) | 0;
 c[q + 28 >> 2] = a;
 c[q + 20 >> 2] = 0;
 c[q + 16 >> 2] = 0;
 b = c[5136] | 0;
 d = 1 << a;
 do if (!(b & d)) {
  c[5136] = b | d;
  c[e >> 2] = q;
  c[q + 24 >> 2] = e;
  c[q + 12 >> 2] = q;
  c[q + 8 >> 2] = q;
 } else {
  b = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
  e = c[e >> 2] | 0;
  while (1) {
   if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
    a = 130;
    break;
   }
   d = e + 16 + (b >>> 31 << 2) | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = 127;
    break;
   } else {
    b = b << 1;
    e = a;
   }
  }
  if ((a | 0) == 127) if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
   c[d >> 2] = q;
   c[q + 24 >> 2] = e;
   c[q + 12 >> 2] = q;
   c[q + 8 >> 2] = q;
   break;
  } else if ((a | 0) == 130) {
   a = e + 8 | 0;
   b = c[a >> 2] | 0;
   p = c[5139] | 0;
   if (b >>> 0 >= p >>> 0 & e >>> 0 >= p >>> 0) {
    c[b + 12 >> 2] = q;
    c[a >> 2] = q;
    c[q + 8 >> 2] = b;
    c[q + 12 >> 2] = e;
    c[q + 24 >> 2] = 0;
    break;
   } else ma();
  }
 } while (0);
 q = (c[5143] | 0) + -1 | 0;
 c[5143] = q;
 if (!q) a = 20996; else return;
 while (1) {
  a = c[a >> 2] | 0;
  if (!a) break; else a = a + 8 | 0;
 }
 c[5143] = -1;
 return;
}

function eb(f, g) {
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0;
 C = f + 116 | 0;
 D = (g | 0) == 0;
 E = f + 72 | 0;
 F = f + 88 | 0;
 L = f + 108 | 0;
 J = f + 56 | 0;
 G = f + 84 | 0;
 H = f + 68 | 0;
 t = f + 52 | 0;
 u = f + 64 | 0;
 v = f + 44 | 0;
 w = f + 96 | 0;
 x = f + 112 | 0;
 I = f + 5792 | 0;
 y = f + 5796 | 0;
 z = f + 5784 | 0;
 A = f + 5788 | 0;
 B = f + 128 | 0;
 K = f + 92 | 0;
 while (1) {
  if ((c[C >> 2] | 0) >>> 0 < 262) {
   gb(f);
   h = c[C >> 2] | 0;
   if (D & h >>> 0 < 262) {
    h = 0;
    j = 54;
    break;
   }
   if (!h) {
    j = 29;
    break;
   }
   if (h >>> 0 > 2) j = 6; else j = 9;
  } else j = 6;
  if ((j | 0) == 6) {
   j = 0;
   h = c[L >> 2] | 0;
   r = ((d[(c[J >> 2] | 0) + (h + 2) >> 0] | 0) ^ c[E >> 2] << c[F >> 2]) & c[G >> 2];
   c[E >> 2] = r;
   r = (c[H >> 2] | 0) + (r << 1) | 0;
   s = b[r >> 1] | 0;
   b[(c[u >> 2] | 0) + ((c[t >> 2] & h) << 1) >> 1] = s;
   i = s & 65535;
   b[r >> 1] = h;
   if (!(s << 16 >> 16)) j = 9; else if ((h - i | 0) >>> 0 > ((c[v >> 2] | 0) + -262 | 0) >>> 0) j = 9; else {
    h = hb(f, i) | 0;
    c[w >> 2] = h;
   }
  }
  if ((j | 0) == 9) h = c[w >> 2] | 0;
  do if (h >>> 0 > 2) {
   r = h + 253 | 0;
   h = (c[L >> 2] | 0) - (c[x >> 2] | 0) | 0;
   s = c[I >> 2] | 0;
   b[(c[y >> 2] | 0) + (s << 1) >> 1] = h;
   c[I >> 2] = s + 1;
   a[(c[z >> 2] | 0) + s >> 0] = r;
   r = f + 148 + ((d[17732 + (r & 255) >> 0] | 0 | 256) + 1 << 2) | 0;
   b[r >> 1] = (b[r >> 1] | 0) + 1 << 16 >> 16;
   h = h + 65535 & 65535;
   h = f + 2440 + ((d[17220 + (h >>> 0 < 256 ? h : (h >>> 7) + 256 | 0) >> 0] | 0) << 2) | 0;
   b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
   h = (c[I >> 2] | 0) == ((c[A >> 2] | 0) + -1 | 0) & 1;
   r = c[w >> 2] | 0;
   s = (c[C >> 2] | 0) - r | 0;
   c[C >> 2] = s;
   if (!(s >>> 0 > 2 ? r >>> 0 <= (c[B >> 2] | 0) >>> 0 : 0)) {
    j = (c[L >> 2] | 0) + r | 0;
    c[L >> 2] = j;
    c[w >> 2] = 0;
    r = c[J >> 2] | 0;
    s = d[r + j >> 0] | 0;
    c[E >> 2] = s;
    c[E >> 2] = ((d[r + (j + 1) >> 0] | 0) ^ s << c[F >> 2]) & c[G >> 2];
    break;
   }
   q = r + -1 | 0;
   c[w >> 2] = q;
   i = c[L >> 2] | 0;
   j = c[F >> 2] | 0;
   k = c[J >> 2] | 0;
   l = c[G >> 2] | 0;
   m = c[H >> 2] | 0;
   n = c[t >> 2] | 0;
   o = c[u >> 2] | 0;
   p = c[E >> 2] | 0;
   s = i;
   do {
    M = s;
    s = s + 1 | 0;
    c[L >> 2] = s;
    p = ((d[k + (M + 3) >> 0] | 0) ^ p << j) & l;
    c[E >> 2] = p;
    M = m + (p << 1) | 0;
    b[o + ((s & n) << 1) >> 1] = b[M >> 1] | 0;
    b[M >> 1] = s;
    q = q + -1 | 0;
    c[w >> 2] = q;
   } while ((q | 0) != 0);
   j = r + i | 0;
   c[L >> 2] = j;
  } else {
   h = a[(c[J >> 2] | 0) + (c[L >> 2] | 0) >> 0] | 0;
   j = c[I >> 2] | 0;
   b[(c[y >> 2] | 0) + (j << 1) >> 1] = 0;
   c[I >> 2] = j + 1;
   a[(c[z >> 2] | 0) + j >> 0] = h;
   h = f + 148 + ((h & 255) << 2) | 0;
   b[h >> 1] = (b[h >> 1] | 0) + 1 << 16 >> 16;
   h = (c[I >> 2] | 0) == ((c[A >> 2] | 0) + -1 | 0) & 1;
   c[C >> 2] = (c[C >> 2] | 0) + -1;
   j = (c[L >> 2] | 0) + 1 | 0;
   c[L >> 2] = j;
  } while (0);
  if (!h) continue;
  h = c[K >> 2] | 0;
  if ((h | 0) > -1) i = (c[J >> 2] | 0) + h | 0; else i = 0;
  lb(f, i, j - h | 0, 0);
  c[K >> 2] = c[L >> 2];
  l = c[f >> 2] | 0;
  m = c[l + 28 >> 2] | 0;
  h = m + 5820 | 0;
  i = c[h >> 2] | 0;
  do if ((i | 0) == 16) {
   M = m + 5816 | 0;
   s = b[M >> 1] & 255;
   i = m + 20 | 0;
   q = c[i >> 2] | 0;
   c[i >> 2] = q + 1;
   r = m + 8 | 0;
   a[(c[r >> 2] | 0) + q >> 0] = s;
   q = (e[M >> 1] | 0) >>> 8 & 255;
   s = c[i >> 2] | 0;
   c[i >> 2] = s + 1;
   a[(c[r >> 2] | 0) + s >> 0] = q;
   b[M >> 1] = 0;
   c[h >> 2] = 0;
  } else if ((i | 0) > 7) {
   M = m + 5816 | 0;
   r = b[M >> 1] & 255;
   i = m + 20 | 0;
   s = c[i >> 2] | 0;
   c[i >> 2] = s + 1;
   a[(c[m + 8 >> 2] | 0) + s >> 0] = r;
   b[M >> 1] = (e[M >> 1] | 0) >>> 8;
   c[h >> 2] = (c[h >> 2] | 0) + -8;
   break;
  } else {
   i = m + 20 | 0;
   break;
  } while (0);
  h = c[i >> 2] | 0;
  j = l + 16 | 0;
  M = c[j >> 2] | 0;
  h = h >>> 0 > M >>> 0 ? M : h;
  if (h | 0) {
   M = l + 12 | 0;
   k = m + 16 | 0;
   bc(c[M >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
   c[M >> 2] = (c[M >> 2] | 0) + h;
   c[k >> 2] = (c[k >> 2] | 0) + h;
   M = l + 20 | 0;
   c[M >> 2] = (c[M >> 2] | 0) + h;
   c[j >> 2] = (c[j >> 2] | 0) - h;
   M = (c[i >> 2] | 0) - h | 0;
   c[i >> 2] = M;
   if (!M) c[k >> 2] = c[m + 8 >> 2];
  }
  if (!(c[(c[f >> 2] | 0) + 16 >> 2] | 0)) {
   h = 0;
   j = 54;
   break;
  }
 }
 if ((j | 0) == 29) {
  j = c[L >> 2] | 0;
  c[f + 5812 >> 2] = j >>> 0 < 2 ? j : 2;
  if ((g | 0) == 4) {
   i = c[K >> 2] | 0;
   if ((i | 0) > -1) h = (c[J >> 2] | 0) + i | 0; else h = 0;
   lb(f, h, j - i | 0, 1);
   c[K >> 2] = c[L >> 2];
   l = c[f >> 2] | 0;
   m = c[l + 28 >> 2] | 0;
   h = m + 5820 | 0;
   i = c[h >> 2] | 0;
   do if ((i | 0) == 16) {
    M = m + 5816 | 0;
    L = b[M >> 1] & 255;
    i = m + 20 | 0;
    J = c[i >> 2] | 0;
    c[i >> 2] = J + 1;
    K = m + 8 | 0;
    a[(c[K >> 2] | 0) + J >> 0] = L;
    J = (e[M >> 1] | 0) >>> 8 & 255;
    L = c[i >> 2] | 0;
    c[i >> 2] = L + 1;
    a[(c[K >> 2] | 0) + L >> 0] = J;
    b[M >> 1] = 0;
    c[h >> 2] = 0;
   } else if ((i | 0) > 7) {
    M = m + 5816 | 0;
    K = b[M >> 1] & 255;
    i = m + 20 | 0;
    L = c[i >> 2] | 0;
    c[i >> 2] = L + 1;
    a[(c[m + 8 >> 2] | 0) + L >> 0] = K;
    b[M >> 1] = (e[M >> 1] | 0) >>> 8;
    c[h >> 2] = (c[h >> 2] | 0) + -8;
    break;
   } else {
    i = m + 20 | 0;
    break;
   } while (0);
   h = c[i >> 2] | 0;
   j = l + 16 | 0;
   M = c[j >> 2] | 0;
   h = h >>> 0 > M >>> 0 ? M : h;
   if (h | 0) {
    M = l + 12 | 0;
    k = m + 16 | 0;
    bc(c[M >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
    c[M >> 2] = (c[M >> 2] | 0) + h;
    c[k >> 2] = (c[k >> 2] | 0) + h;
    M = l + 20 | 0;
    c[M >> 2] = (c[M >> 2] | 0) + h;
    c[j >> 2] = (c[j >> 2] | 0) - h;
    M = (c[i >> 2] | 0) - h | 0;
    c[i >> 2] = M;
    if (!M) c[k >> 2] = c[m + 8 >> 2];
   }
   M = (c[(c[f >> 2] | 0) + 16 >> 2] | 0) == 0 ? 2 : 3;
   return M | 0;
  }
  if (c[I >> 2] | 0) {
   i = c[K >> 2] | 0;
   if ((i | 0) > -1) h = (c[J >> 2] | 0) + i | 0; else h = 0;
   lb(f, h, j - i | 0, 0);
   c[K >> 2] = c[L >> 2];
   l = c[f >> 2] | 0;
   m = c[l + 28 >> 2] | 0;
   h = m + 5820 | 0;
   i = c[h >> 2] | 0;
   do if ((i | 0) == 16) {
    M = m + 5816 | 0;
    L = b[M >> 1] & 255;
    i = m + 20 | 0;
    J = c[i >> 2] | 0;
    c[i >> 2] = J + 1;
    K = m + 8 | 0;
    a[(c[K >> 2] | 0) + J >> 0] = L;
    J = (e[M >> 1] | 0) >>> 8 & 255;
    L = c[i >> 2] | 0;
    c[i >> 2] = L + 1;
    a[(c[K >> 2] | 0) + L >> 0] = J;
    b[M >> 1] = 0;
    c[h >> 2] = 0;
   } else if ((i | 0) > 7) {
    M = m + 5816 | 0;
    K = b[M >> 1] & 255;
    i = m + 20 | 0;
    L = c[i >> 2] | 0;
    c[i >> 2] = L + 1;
    a[(c[m + 8 >> 2] | 0) + L >> 0] = K;
    b[M >> 1] = (e[M >> 1] | 0) >>> 8;
    c[h >> 2] = (c[h >> 2] | 0) + -8;
    break;
   } else {
    i = m + 20 | 0;
    break;
   } while (0);
   h = c[i >> 2] | 0;
   j = l + 16 | 0;
   M = c[j >> 2] | 0;
   h = h >>> 0 > M >>> 0 ? M : h;
   if (h | 0) {
    M = l + 12 | 0;
    k = m + 16 | 0;
    bc(c[M >> 2] | 0, c[k >> 2] | 0, h | 0) | 0;
    c[M >> 2] = (c[M >> 2] | 0) + h;
    c[k >> 2] = (c[k >> 2] | 0) + h;
    M = l + 20 | 0;
    c[M >> 2] = (c[M >> 2] | 0) + h;
    c[j >> 2] = (c[j >> 2] | 0) - h;
    M = (c[i >> 2] | 0) - h | 0;
    c[i >> 2] = M;
    if (!M) c[k >> 2] = c[m + 8 >> 2];
   }
   if (!(c[(c[f >> 2] | 0) + 16 >> 2] | 0)) {
    M = 0;
    return M | 0;
   }
  }
  M = 1;
  return M | 0;
 } else if ((j | 0) == 54) return h | 0;
 return 0;
}

function lb(f, g, h, i) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 i = i | 0;
 var j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 if ((c[f + 132 >> 2] | 0) > 0) {
  m = (c[f >> 2] | 0) + 44 | 0;
  if ((c[m >> 2] | 0) == 2) {
   j = -201342849;
   k = 0;
   while (1) {
    if (j & 1 | 0) if (b[f + 148 + (k << 2) >> 1] | 0) {
     j = 0;
     break;
    }
    k = k + 1 | 0;
    if ((k | 0) >= 32) {
     l = 6;
     break;
    } else j = j >>> 1;
   }
   a : do if ((l | 0) == 6) if (!(b[f + 184 >> 1] | 0)) if (!(b[f + 188 >> 1] | 0)) if (!(b[f + 200 >> 1] | 0)) {
    j = 32;
    while (1) {
     if (b[f + 148 + (j << 2) >> 1] | 0) {
      j = 1;
      break a;
     }
     j = j + 1 | 0;
     if ((j | 0) >= 256) {
      j = 0;
      break;
     }
    }
   } else j = 1; else j = 1; else j = 1; while (0);
   c[m >> 2] = j;
  }
  mb(f, f + 2840 | 0);
  mb(f, f + 2852 | 0);
  r = c[f + 2844 >> 2] | 0;
  p = b[f + 150 >> 1] | 0;
  m = p << 16 >> 16 == 0;
  b[f + 148 + (r + 1 << 2) + 2 >> 1] = -1;
  t = f + 2752 | 0;
  u = f + 2756 | 0;
  v = f + 2748 | 0;
  p = p & 65535;
  j = 0;
  q = -1;
  l = m ? 3 : 4;
  m = m ? 138 : 7;
  b : while (1) {
   k = 0;
   do {
    if ((j | 0) > (r | 0)) break b;
    j = j + 1 | 0;
    n = b[f + 148 + (j << 2) + 2 >> 1] | 0;
    o = n & 65535;
    k = k + 1 | 0;
    s = (p | 0) == (o | 0);
   } while ((k | 0) < (m | 0) & s);
   do if ((k | 0) < (l | 0)) {
    q = f + 2684 + (p << 2) | 0;
    b[q >> 1] = (e[q >> 1] | 0) + k;
   } else if (!p) if ((k | 0) < 11) {
    b[t >> 1] = (b[t >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    b[u >> 1] = (b[u >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    k = f + 2684 + (p << 2) | 0;
    if ((p | 0) != (q | 0)) b[k >> 1] = (b[k >> 1] | 0) + 1 << 16 >> 16;
    b[v >> 1] = (b[v >> 1] | 0) + 1 << 16 >> 16;
    break;
   } while (0);
   m = n << 16 >> 16 == 0;
   q = p;
   p = o;
   l = m | s ? 3 : 4;
   m = m ? 138 : s ? 6 : 7;
  }
  r = c[f + 2856 >> 2] | 0;
  p = b[f + 2442 >> 1] | 0;
  m = p << 16 >> 16 == 0;
  b[f + 2440 + (r + 1 << 2) + 2 >> 1] = -1;
  p = p & 65535;
  j = 0;
  q = -1;
  l = m ? 3 : 4;
  m = m ? 138 : 7;
  c : while (1) {
   k = 0;
   do {
    if ((j | 0) > (r | 0)) break c;
    j = j + 1 | 0;
    n = b[f + 2440 + (j << 2) + 2 >> 1] | 0;
    o = n & 65535;
    k = k + 1 | 0;
    s = (p | 0) == (o | 0);
   } while ((k | 0) < (m | 0) & s);
   do if ((k | 0) < (l | 0)) {
    q = f + 2684 + (p << 2) | 0;
    b[q >> 1] = (e[q >> 1] | 0) + k;
   } else if (!p) if ((k | 0) < 11) {
    b[t >> 1] = (b[t >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    b[u >> 1] = (b[u >> 1] | 0) + 1 << 16 >> 16;
    break;
   } else {
    k = f + 2684 + (p << 2) | 0;
    if ((p | 0) != (q | 0)) b[k >> 1] = (b[k >> 1] | 0) + 1 << 16 >> 16;
    b[v >> 1] = (b[v >> 1] | 0) + 1 << 16 >> 16;
    break;
   } while (0);
   m = n << 16 >> 16 == 0;
   q = p;
   p = o;
   l = m | s ? 3 : 4;
   m = m ? 138 : s ? 6 : 7;
  }
  mb(f, f + 2864 | 0);
  if (!(b[f + 2746 >> 1] | 0)) if (!(b[f + 2690 >> 1] | 0)) if (!(b[f + 2742 >> 1] | 0)) if (!(b[f + 2694 >> 1] | 0)) if (!(b[f + 2738 >> 1] | 0)) if (!(b[f + 2698 >> 1] | 0)) if (!(b[f + 2734 >> 1] | 0)) if (!(b[f + 2702 >> 1] | 0)) if (!(b[f + 2730 >> 1] | 0)) if (!(b[f + 2706 >> 1] | 0)) if (!(b[f + 2726 >> 1] | 0)) if (!(b[f + 2710 >> 1] | 0)) if (!(b[f + 2722 >> 1] | 0)) if (!(b[f + 2714 >> 1] | 0)) if (!(b[f + 2718 >> 1] | 0)) j = (b[f + 2686 >> 1] | 0) == 0 ? 2 : 3; else j = 4; else j = 5; else j = 6; else j = 7; else j = 8; else j = 9; else j = 10; else j = 11; else j = 12; else j = 13; else j = 14; else j = 15; else j = 16; else j = 17; else j = 18;
  l = f + 5800 | 0;
  k = (j * 3 | 0) + 17 + (c[l >> 2] | 0) | 0;
  c[l >> 2] = k;
  k = (k + 10 | 0) >>> 3;
  l = ((c[f + 5804 >> 2] | 0) + 10 | 0) >>> 3;
  k = l >>> 0 > k >>> 0 ? k : l;
 } else {
  l = h + 5 | 0;
  k = l;
  j = 0;
 }
 do if ((g | 0) != 0 & (h + 4 | 0) >>> 0 <= k >>> 0) kb(f, g, h, i); else {
  t = f + 5820 | 0;
  n = c[t >> 2] | 0;
  m = (n | 0) > 13;
  if ((l | 0) == (k | 0) ? 1 : (c[f + 136 >> 2] | 0) == 4) {
   j = i + 2 & 65535;
   k = f + 5816 | 0;
   l = e[k >> 1] | j << n;
   b[k >> 1] = l;
   if (m) {
    u = f + 20 | 0;
    v = c[u >> 2] | 0;
    c[u >> 2] = v + 1;
    g = f + 8 | 0;
    a[(c[g >> 2] | 0) + v >> 0] = l;
    v = (e[k >> 1] | 0) >>> 8 & 255;
    h = c[u >> 2] | 0;
    c[u >> 2] = h + 1;
    a[(c[g >> 2] | 0) + h >> 0] = v;
    h = c[t >> 2] | 0;
    b[k >> 1] = j >>> (16 - h | 0);
    j = h + -13 | 0;
   } else j = n + 3 | 0;
   c[t >> 2] = j;
   nb(f, 14388, 14268);
   break;
  }
  k = i + 4 & 65535;
  s = f + 5816 | 0;
  l = e[s >> 1] | k << n;
  b[s >> 1] = l;
  if (m) {
   g = f + 20 | 0;
   n = c[g >> 2] | 0;
   c[g >> 2] = n + 1;
   h = f + 8 | 0;
   a[(c[h >> 2] | 0) + n >> 0] = l;
   l = (e[s >> 1] | 0) >>> 8 & 255;
   n = c[g >> 2] | 0;
   c[g >> 2] = n + 1;
   a[(c[h >> 2] | 0) + n >> 0] = l;
   n = c[t >> 2] | 0;
   l = k >>> (16 - n | 0);
   b[s >> 1] = l;
   n = n + -13 | 0;
  } else n = n + 3 | 0;
  c[t >> 2] = n;
  q = c[f + 2844 >> 2] | 0;
  r = c[f + 2856 >> 2] | 0;
  m = q + 65280 & 65535;
  k = m << n | l & 65535;
  b[s >> 1] = k;
  if ((n | 0) > 11) {
   v = f + 20 | 0;
   h = c[v >> 2] | 0;
   c[v >> 2] = h + 1;
   g = f + 8 | 0;
   a[(c[g >> 2] | 0) + h >> 0] = k;
   k = (e[s >> 1] | 0) >>> 8 & 255;
   h = c[v >> 2] | 0;
   c[v >> 2] = h + 1;
   a[(c[g >> 2] | 0) + h >> 0] = k;
   h = c[t >> 2] | 0;
   k = m >>> (16 - h | 0);
   b[s >> 1] = k;
   m = h + -11 | 0;
  } else m = n + 5 | 0;
  c[t >> 2] = m;
  l = r & 65535;
  k = l << m | k & 65535;
  b[s >> 1] = k;
  if ((m | 0) > 11) {
   g = f + 20 | 0;
   m = c[g >> 2] | 0;
   c[g >> 2] = m + 1;
   h = f + 8 | 0;
   a[(c[h >> 2] | 0) + m >> 0] = k;
   k = (e[s >> 1] | 0) >>> 8 & 255;
   m = c[g >> 2] | 0;
   c[g >> 2] = m + 1;
   a[(c[h >> 2] | 0) + m >> 0] = k;
   m = c[t >> 2] | 0;
   k = l >>> (16 - m | 0);
   b[s >> 1] = k;
   m = m + -11 | 0;
  } else m = m + 5 | 0;
  c[t >> 2] = m;
  l = j + 65533 & 65535;
  k = l << m | k & 65535;
  b[s >> 1] = k;
  if ((m | 0) > 12) {
   p = f + 20 | 0;
   h = c[p >> 2] | 0;
   c[p >> 2] = h + 1;
   o = f + 8 | 0;
   a[(c[o >> 2] | 0) + h >> 0] = k;
   k = (e[s >> 1] | 0) >>> 8 & 255;
   h = c[p >> 2] | 0;
   c[p >> 2] = h + 1;
   a[(c[o >> 2] | 0) + h >> 0] = k;
   h = c[t >> 2] | 0;
   k = l >>> (16 - h | 0);
   b[s >> 1] = k;
   l = h + -12 | 0;
  } else {
   o = f + 8 | 0;
   p = f + 20 | 0;
   l = m + 4 | 0;
  }
  c[t >> 2] = l;
  n = 0;
  while (1) {
   m = e[f + 2684 + (d[17988 + n >> 0] << 2) + 2 >> 1] | 0;
   k = m << l | k & 65535;
   b[s >> 1] = k;
   if ((l | 0) > 13) {
    l = c[p >> 2] | 0;
    c[p >> 2] = l + 1;
    a[(c[o >> 2] | 0) + l >> 0] = k;
    k = (e[s >> 1] | 0) >>> 8 & 255;
    l = c[p >> 2] | 0;
    c[p >> 2] = l + 1;
    a[(c[o >> 2] | 0) + l >> 0] = k;
    l = c[t >> 2] | 0;
    k = m >>> (16 - l | 0);
    b[s >> 1] = k;
    l = l + -13 | 0;
   } else l = l + 3 | 0;
   c[t >> 2] = l;
   if ((n | 0) == (j | 0)) break; else n = n + 1 | 0;
  }
  g = f + 148 | 0;
  ob(f, g, q);
  h = f + 2440 | 0;
  ob(f, h, r);
  nb(f, g, h);
 } while (0);
 jb(f);
 if (!i) return;
 l = f + 5820 | 0;
 k = c[l >> 2] | 0;
 if ((k | 0) > 8) {
  j = f + 5816 | 0;
  v = b[j >> 1] & 255;
  g = f + 20 | 0;
  h = c[g >> 2] | 0;
  c[g >> 2] = h + 1;
  i = f + 8 | 0;
  a[(c[i >> 2] | 0) + h >> 0] = v;
  h = (e[j >> 1] | 0) >>> 8 & 255;
  f = c[g >> 2] | 0;
  c[g >> 2] = f + 1;
  a[(c[i >> 2] | 0) + f >> 0] = h;
 } else {
  j = f + 5816 | 0;
  if ((k | 0) > 0) {
   h = b[j >> 1] & 255;
   g = f + 20 | 0;
   i = c[g >> 2] | 0;
   c[g >> 2] = i + 1;
   a[(c[f + 8 >> 2] | 0) + i >> 0] = h;
  }
 }
 b[j >> 1] = 0;
 c[l >> 2] = 0;
 return;
}

function Tb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0;
 o = a + b | 0;
 d = c[a + 4 >> 2] | 0;
 do if (!(d & 1)) {
  g = c[a >> 2] | 0;
  if (!(d & 3)) return;
  l = a + (0 - g) | 0;
  k = g + b | 0;
  i = c[5139] | 0;
  if (l >>> 0 < i >>> 0) ma();
  if ((l | 0) == (c[5140] | 0)) {
   a = o + 4 | 0;
   d = c[a >> 2] | 0;
   if ((d & 3 | 0) != 3) {
    r = l;
    f = k;
    break;
   }
   c[5137] = k;
   c[a >> 2] = d & -2;
   c[l + 4 >> 2] = k | 1;
   c[l + k >> 2] = k;
   return;
  }
  e = g >>> 3;
  if (g >>> 0 < 256) {
   d = c[l + 8 >> 2] | 0;
   b = c[l + 12 >> 2] | 0;
   a = 20580 + (e << 1 << 2) | 0;
   if ((d | 0) != (a | 0)) {
    if (d >>> 0 < i >>> 0) ma();
    if ((c[d + 12 >> 2] | 0) != (l | 0)) ma();
   }
   if ((b | 0) == (d | 0)) {
    c[5135] = c[5135] & ~(1 << e);
    r = l;
    f = k;
    break;
   }
   if ((b | 0) == (a | 0)) h = b + 8 | 0; else {
    if (b >>> 0 < i >>> 0) ma();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (l | 0)) h = a; else ma();
   }
   c[d + 12 >> 2] = b;
   c[h >> 2] = d;
   r = l;
   f = k;
   break;
  }
  g = c[l + 24 >> 2] | 0;
  b = c[l + 12 >> 2] | 0;
  do if ((b | 0) == (l | 0)) {
   b = l + 16 | 0;
   d = b + 4 | 0;
   a = c[d >> 2] | 0;
   if (!a) {
    a = c[b >> 2] | 0;
    if (!a) {
     j = 0;
     break;
    } else d = b;
   }
   while (1) {
    b = a + 20 | 0;
    e = c[b >> 2] | 0;
    if (e | 0) {
     a = e;
     d = b;
     continue;
    }
    b = a + 16 | 0;
    e = c[b >> 2] | 0;
    if (!e) break; else {
     a = e;
     d = b;
    }
   }
   if (d >>> 0 < i >>> 0) ma(); else {
    c[d >> 2] = 0;
    j = a;
    break;
   }
  } else {
   e = c[l + 8 >> 2] | 0;
   if (e >>> 0 < i >>> 0) ma();
   a = e + 12 | 0;
   if ((c[a >> 2] | 0) != (l | 0)) ma();
   d = b + 8 | 0;
   if ((c[d >> 2] | 0) == (l | 0)) {
    c[a >> 2] = b;
    c[d >> 2] = e;
    j = b;
    break;
   } else ma();
  } while (0);
  if (!g) {
   r = l;
   f = k;
  } else {
   a = c[l + 28 >> 2] | 0;
   d = 20844 + (a << 2) | 0;
   if ((l | 0) == (c[d >> 2] | 0)) {
    c[d >> 2] = j;
    if (!j) {
     c[5136] = c[5136] & ~(1 << a);
     r = l;
     f = k;
     break;
    }
   } else {
    if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
    a = g + 16 | 0;
    if ((c[a >> 2] | 0) == (l | 0)) c[a >> 2] = j; else c[g + 20 >> 2] = j;
    if (!j) {
     r = l;
     f = k;
     break;
    }
   }
   b = c[5139] | 0;
   if (j >>> 0 < b >>> 0) ma();
   c[j + 24 >> 2] = g;
   a = l + 16 | 0;
   d = c[a >> 2] | 0;
   do if (d | 0) if (d >>> 0 < b >>> 0) ma(); else {
    c[j + 16 >> 2] = d;
    c[d + 24 >> 2] = j;
    break;
   } while (0);
   a = c[a + 4 >> 2] | 0;
   if (!a) {
    r = l;
    f = k;
   } else if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
    c[j + 20 >> 2] = a;
    c[a + 24 >> 2] = j;
    r = l;
    f = k;
    break;
   }
  }
 } else {
  r = a;
  f = b;
 } while (0);
 h = c[5139] | 0;
 if (o >>> 0 < h >>> 0) ma();
 a = o + 4 | 0;
 d = c[a >> 2] | 0;
 if (!(d & 2)) {
  if ((o | 0) == (c[5141] | 0)) {
   q = (c[5138] | 0) + f | 0;
   c[5138] = q;
   c[5141] = r;
   c[r + 4 >> 2] = q | 1;
   if ((r | 0) != (c[5140] | 0)) return;
   c[5140] = 0;
   c[5137] = 0;
   return;
  }
  if ((o | 0) == (c[5140] | 0)) {
   q = (c[5137] | 0) + f | 0;
   c[5137] = q;
   c[5140] = r;
   c[r + 4 >> 2] = q | 1;
   c[r + q >> 2] = q;
   return;
  }
  f = (d & -8) + f | 0;
  e = d >>> 3;
  do if (d >>> 0 < 256) {
   d = c[o + 8 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   a = 20580 + (e << 1 << 2) | 0;
   if ((d | 0) != (a | 0)) {
    if (d >>> 0 < h >>> 0) ma();
    if ((c[d + 12 >> 2] | 0) != (o | 0)) ma();
   }
   if ((b | 0) == (d | 0)) {
    c[5135] = c[5135] & ~(1 << e);
    break;
   }
   if ((b | 0) == (a | 0)) m = b + 8 | 0; else {
    if (b >>> 0 < h >>> 0) ma();
    a = b + 8 | 0;
    if ((c[a >> 2] | 0) == (o | 0)) m = a; else ma();
   }
   c[d + 12 >> 2] = b;
   c[m >> 2] = d;
  } else {
   g = c[o + 24 >> 2] | 0;
   b = c[o + 12 >> 2] | 0;
   do if ((b | 0) == (o | 0)) {
    b = o + 16 | 0;
    d = b + 4 | 0;
    a = c[d >> 2] | 0;
    if (!a) {
     a = c[b >> 2] | 0;
     if (!a) {
      n = 0;
      break;
     } else d = b;
    }
    while (1) {
     b = a + 20 | 0;
     e = c[b >> 2] | 0;
     if (e | 0) {
      a = e;
      d = b;
      continue;
     }
     b = a + 16 | 0;
     e = c[b >> 2] | 0;
     if (!e) break; else {
      a = e;
      d = b;
     }
    }
    if (d >>> 0 < h >>> 0) ma(); else {
     c[d >> 2] = 0;
     n = a;
     break;
    }
   } else {
    e = c[o + 8 >> 2] | 0;
    if (e >>> 0 < h >>> 0) ma();
    a = e + 12 | 0;
    if ((c[a >> 2] | 0) != (o | 0)) ma();
    d = b + 8 | 0;
    if ((c[d >> 2] | 0) == (o | 0)) {
     c[a >> 2] = b;
     c[d >> 2] = e;
     n = b;
     break;
    } else ma();
   } while (0);
   if (g | 0) {
    a = c[o + 28 >> 2] | 0;
    d = 20844 + (a << 2) | 0;
    if ((o | 0) == (c[d >> 2] | 0)) {
     c[d >> 2] = n;
     if (!n) {
      c[5136] = c[5136] & ~(1 << a);
      break;
     }
    } else {
     if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
     a = g + 16 | 0;
     if ((c[a >> 2] | 0) == (o | 0)) c[a >> 2] = n; else c[g + 20 >> 2] = n;
     if (!n) break;
    }
    b = c[5139] | 0;
    if (n >>> 0 < b >>> 0) ma();
    c[n + 24 >> 2] = g;
    a = o + 16 | 0;
    d = c[a >> 2] | 0;
    do if (d | 0) if (d >>> 0 < b >>> 0) ma(); else {
     c[n + 16 >> 2] = d;
     c[d + 24 >> 2] = n;
     break;
    } while (0);
    a = c[a + 4 >> 2] | 0;
    if (a | 0) if (a >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
     c[n + 20 >> 2] = a;
     c[a + 24 >> 2] = n;
     break;
    }
   }
  } while (0);
  c[r + 4 >> 2] = f | 1;
  c[r + f >> 2] = f;
  if ((r | 0) == (c[5140] | 0)) {
   c[5137] = f;
   return;
  }
 } else {
  c[a >> 2] = d & -2;
  c[r + 4 >> 2] = f | 1;
  c[r + f >> 2] = f;
 }
 a = f >>> 3;
 if (f >>> 0 < 256) {
  b = 20580 + (a << 1 << 2) | 0;
  d = c[5135] | 0;
  a = 1 << a;
  if (!(d & a)) {
   c[5135] = d | a;
   p = b;
   q = b + 8 | 0;
  } else {
   a = b + 8 | 0;
   d = c[a >> 2] | 0;
   if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
    p = d;
    q = a;
   }
  }
  c[q >> 2] = r;
  c[p + 12 >> 2] = r;
  c[r + 8 >> 2] = p;
  c[r + 12 >> 2] = b;
  return;
 }
 a = f >>> 8;
 if (!a) a = 0; else if (f >>> 0 > 16777215) a = 31; else {
  p = (a + 1048320 | 0) >>> 16 & 8;
  q = a << p;
  o = (q + 520192 | 0) >>> 16 & 4;
  q = q << o;
  a = (q + 245760 | 0) >>> 16 & 2;
  a = 14 - (o | p | a) + (q << a >>> 15) | 0;
  a = f >>> (a + 7 | 0) & 1 | a << 1;
 }
 e = 20844 + (a << 2) | 0;
 c[r + 28 >> 2] = a;
 c[r + 20 >> 2] = 0;
 c[r + 16 >> 2] = 0;
 d = c[5136] | 0;
 b = 1 << a;
 if (!(d & b)) {
  c[5136] = d | b;
  c[e >> 2] = r;
  c[r + 24 >> 2] = e;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 }
 d = f << ((a | 0) == 31 ? 0 : 25 - (a >>> 1) | 0);
 e = c[e >> 2] | 0;
 while (1) {
  if ((c[e + 4 >> 2] & -8 | 0) == (f | 0)) {
   a = 127;
   break;
  }
  b = e + 16 + (d >>> 31 << 2) | 0;
  a = c[b >> 2] | 0;
  if (!a) {
   a = 124;
   break;
  } else {
   d = d << 1;
   e = a;
  }
 }
 if ((a | 0) == 124) {
  if (b >>> 0 < (c[5139] | 0) >>> 0) ma();
  c[b >> 2] = r;
  c[r + 24 >> 2] = e;
  c[r + 12 >> 2] = r;
  c[r + 8 >> 2] = r;
  return;
 } else if ((a | 0) == 127) {
  a = e + 8 | 0;
  d = c[a >> 2] | 0;
  q = c[5139] | 0;
  if (!(d >>> 0 >= q >>> 0 & e >>> 0 >= q >>> 0)) ma();
  c[d + 12 >> 2] = r;
  c[a >> 2] = r;
  c[r + 8 >> 2] = d;
  c[r + 12 >> 2] = e;
  c[r + 24 >> 2] = 0;
  return;
 }
}

function db(d, f) {
 d = d | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0;
 m = (c[d + 12 >> 2] | 0) + -5 | 0;
 m = m >>> 0 < 65535 ? m : 65535;
 n = d + 116 | 0;
 q = d + 108 | 0;
 r = d + 92 | 0;
 o = d + 44 | 0;
 p = d + 56 | 0;
 while (1) {
  g = c[n >> 2] | 0;
  if (g >>> 0 < 2) {
   gb(d);
   g = c[n >> 2] | 0;
   if (!(g | f)) {
    g = 0;
    h = 55;
    break;
   }
   if (!g) {
    h = 30;
    break;
   }
  }
  g = (c[q >> 2] | 0) + g | 0;
  c[q >> 2] = g;
  c[n >> 2] = 0;
  i = c[r >> 2] | 0;
  h = i + m | 0;
  if (!((g | 0) != 0 & g >>> 0 < h >>> 0)) {
   c[n >> 2] = g - h;
   c[q >> 2] = h;
   if ((i | 0) > -1) g = (c[p >> 2] | 0) + i | 0; else g = 0;
   lb(d, g, m, 0);
   c[r >> 2] = c[q >> 2];
   k = c[d >> 2] | 0;
   l = c[k + 28 >> 2] | 0;
   g = l + 5820 | 0;
   h = c[g >> 2] | 0;
   do if ((h | 0) == 16) {
    j = l + 5816 | 0;
    i = b[j >> 1] & 255;
    h = l + 20 | 0;
    t = c[h >> 2] | 0;
    c[h >> 2] = t + 1;
    s = l + 8 | 0;
    a[(c[s >> 2] | 0) + t >> 0] = i;
    t = (e[j >> 1] | 0) >>> 8 & 255;
    i = c[h >> 2] | 0;
    c[h >> 2] = i + 1;
    a[(c[s >> 2] | 0) + i >> 0] = t;
    b[j >> 1] = 0;
    c[g >> 2] = 0;
   } else if ((h | 0) > 7) {
    t = l + 5816 | 0;
    j = b[t >> 1] & 255;
    h = l + 20 | 0;
    s = c[h >> 2] | 0;
    c[h >> 2] = s + 1;
    a[(c[l + 8 >> 2] | 0) + s >> 0] = j;
    b[t >> 1] = (e[t >> 1] | 0) >>> 8;
    c[g >> 2] = (c[g >> 2] | 0) + -8;
    break;
   } else {
    h = l + 20 | 0;
    break;
   } while (0);
   g = c[h >> 2] | 0;
   i = k + 16 | 0;
   t = c[i >> 2] | 0;
   g = g >>> 0 > t >>> 0 ? t : g;
   if (g | 0) {
    t = k + 12 | 0;
    j = l + 16 | 0;
    bc(c[t >> 2] | 0, c[j >> 2] | 0, g | 0) | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[j >> 2] = (c[j >> 2] | 0) + g;
    t = k + 20 | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[i >> 2] = (c[i >> 2] | 0) - g;
    t = (c[h >> 2] | 0) - g | 0;
    c[h >> 2] = t;
    if (!t) c[j >> 2] = c[l + 8 >> 2];
   }
   if (!(c[(c[d >> 2] | 0) + 16 >> 2] | 0)) {
    g = 0;
    h = 55;
    break;
   }
   g = c[q >> 2] | 0;
   i = c[r >> 2] | 0;
  }
  h = g - i | 0;
  if (h >>> 0 < ((c[o >> 2] | 0) + -262 | 0) >>> 0) continue;
  if ((i | 0) > -1) g = (c[p >> 2] | 0) + i | 0; else g = 0;
  lb(d, g, h, 0);
  c[r >> 2] = c[q >> 2];
  k = c[d >> 2] | 0;
  l = c[k + 28 >> 2] | 0;
  g = l + 5820 | 0;
  h = c[g >> 2] | 0;
  do if ((h | 0) == 16) {
   t = l + 5816 | 0;
   s = b[t >> 1] & 255;
   h = l + 20 | 0;
   i = c[h >> 2] | 0;
   c[h >> 2] = i + 1;
   j = l + 8 | 0;
   a[(c[j >> 2] | 0) + i >> 0] = s;
   i = (e[t >> 1] | 0) >>> 8 & 255;
   s = c[h >> 2] | 0;
   c[h >> 2] = s + 1;
   a[(c[j >> 2] | 0) + s >> 0] = i;
   b[t >> 1] = 0;
   c[g >> 2] = 0;
  } else if ((h | 0) > 7) {
   t = l + 5816 | 0;
   j = b[t >> 1] & 255;
   h = l + 20 | 0;
   s = c[h >> 2] | 0;
   c[h >> 2] = s + 1;
   a[(c[l + 8 >> 2] | 0) + s >> 0] = j;
   b[t >> 1] = (e[t >> 1] | 0) >>> 8;
   c[g >> 2] = (c[g >> 2] | 0) + -8;
   break;
  } else {
   h = l + 20 | 0;
   break;
  } while (0);
  g = c[h >> 2] | 0;
  i = k + 16 | 0;
  t = c[i >> 2] | 0;
  g = g >>> 0 > t >>> 0 ? t : g;
  if (g | 0) {
   t = k + 12 | 0;
   j = l + 16 | 0;
   bc(c[t >> 2] | 0, c[j >> 2] | 0, g | 0) | 0;
   c[t >> 2] = (c[t >> 2] | 0) + g;
   c[j >> 2] = (c[j >> 2] | 0) + g;
   t = k + 20 | 0;
   c[t >> 2] = (c[t >> 2] | 0) + g;
   c[i >> 2] = (c[i >> 2] | 0) - g;
   t = (c[h >> 2] | 0) - g | 0;
   c[h >> 2] = t;
   if (!t) c[j >> 2] = c[l + 8 >> 2];
  }
  if (!(c[(c[d >> 2] | 0) + 16 >> 2] | 0)) {
   g = 0;
   h = 55;
   break;
  }
 }
 if ((h | 0) == 30) {
  c[d + 5812 >> 2] = 0;
  if ((f | 0) == 4) {
   h = c[r >> 2] | 0;
   if ((h | 0) > -1) g = (c[p >> 2] | 0) + h | 0; else g = 0;
   lb(d, g, (c[q >> 2] | 0) - h | 0, 1);
   c[r >> 2] = c[q >> 2];
   k = c[d >> 2] | 0;
   l = c[k + 28 >> 2] | 0;
   g = l + 5820 | 0;
   h = c[g >> 2] | 0;
   do if ((h | 0) == 16) {
    t = l + 5816 | 0;
    s = b[t >> 1] & 255;
    h = l + 20 | 0;
    q = c[h >> 2] | 0;
    c[h >> 2] = q + 1;
    r = l + 8 | 0;
    a[(c[r >> 2] | 0) + q >> 0] = s;
    q = (e[t >> 1] | 0) >>> 8 & 255;
    s = c[h >> 2] | 0;
    c[h >> 2] = s + 1;
    a[(c[r >> 2] | 0) + s >> 0] = q;
    b[t >> 1] = 0;
    c[g >> 2] = 0;
   } else if ((h | 0) > 7) {
    t = l + 5816 | 0;
    r = b[t >> 1] & 255;
    h = l + 20 | 0;
    s = c[h >> 2] | 0;
    c[h >> 2] = s + 1;
    a[(c[l + 8 >> 2] | 0) + s >> 0] = r;
    b[t >> 1] = (e[t >> 1] | 0) >>> 8;
    c[g >> 2] = (c[g >> 2] | 0) + -8;
    break;
   } else {
    h = l + 20 | 0;
    break;
   } while (0);
   g = c[h >> 2] | 0;
   i = k + 16 | 0;
   t = c[i >> 2] | 0;
   g = g >>> 0 > t >>> 0 ? t : g;
   if (g | 0) {
    t = k + 12 | 0;
    j = l + 16 | 0;
    bc(c[t >> 2] | 0, c[j >> 2] | 0, g | 0) | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[j >> 2] = (c[j >> 2] | 0) + g;
    t = k + 20 | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[i >> 2] = (c[i >> 2] | 0) - g;
    t = (c[h >> 2] | 0) - g | 0;
    c[h >> 2] = t;
    if (!t) c[j >> 2] = c[l + 8 >> 2];
   }
   t = (c[(c[d >> 2] | 0) + 16 >> 2] | 0) == 0 ? 2 : 3;
   return t | 0;
  }
  h = c[q >> 2] | 0;
  i = c[r >> 2] | 0;
  if ((h | 0) > (i | 0)) {
   if ((i | 0) > -1) g = (c[p >> 2] | 0) + i | 0; else g = 0;
   lb(d, g, h - i | 0, 0);
   c[r >> 2] = c[q >> 2];
   k = c[d >> 2] | 0;
   l = c[k + 28 >> 2] | 0;
   g = l + 5820 | 0;
   h = c[g >> 2] | 0;
   do if ((h | 0) == 16) {
    t = l + 5816 | 0;
    s = b[t >> 1] & 255;
    h = l + 20 | 0;
    q = c[h >> 2] | 0;
    c[h >> 2] = q + 1;
    r = l + 8 | 0;
    a[(c[r >> 2] | 0) + q >> 0] = s;
    q = (e[t >> 1] | 0) >>> 8 & 255;
    s = c[h >> 2] | 0;
    c[h >> 2] = s + 1;
    a[(c[r >> 2] | 0) + s >> 0] = q;
    b[t >> 1] = 0;
    c[g >> 2] = 0;
   } else if ((h | 0) > 7) {
    t = l + 5816 | 0;
    r = b[t >> 1] & 255;
    h = l + 20 | 0;
    s = c[h >> 2] | 0;
    c[h >> 2] = s + 1;
    a[(c[l + 8 >> 2] | 0) + s >> 0] = r;
    b[t >> 1] = (e[t >> 1] | 0) >>> 8;
    c[g >> 2] = (c[g >> 2] | 0) + -8;
    break;
   } else {
    h = l + 20 | 0;
    break;
   } while (0);
   g = c[h >> 2] | 0;
   i = k + 16 | 0;
   t = c[i >> 2] | 0;
   g = g >>> 0 > t >>> 0 ? t : g;
   if (g | 0) {
    t = k + 12 | 0;
    j = l + 16 | 0;
    bc(c[t >> 2] | 0, c[j >> 2] | 0, g | 0) | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[j >> 2] = (c[j >> 2] | 0) + g;
    t = k + 20 | 0;
    c[t >> 2] = (c[t >> 2] | 0) + g;
    c[i >> 2] = (c[i >> 2] | 0) - g;
    t = (c[h >> 2] | 0) - g | 0;
    c[h >> 2] = t;
    if (!t) c[j >> 2] = c[l + 8 >> 2];
   }
   if (!(c[(c[d >> 2] | 0) + 16 >> 2] | 0)) {
    t = 0;
    return t | 0;
   }
  }
  t = 1;
  return t | 0;
 } else if ((h | 0) == 55) return g | 0;
 return 0;
}

function gb(a) {
 a = a | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0, E = 0, F = 0, G = 0, H = 0, I = 0, J = 0, K = 0, L = 0, M = 0, N = 0, O = 0, P = 0, Q = 0, R = 0, S = 0, T = 0, U = 0;
 p = a + 44 | 0;
 y = c[p >> 2] | 0;
 C = a + 60 | 0;
 D = a + 116 | 0;
 E = a + 108 | 0;
 z = y + -262 | 0;
 F = a + 56 | 0;
 A = a + 5812 | 0;
 B = a + 72 | 0;
 q = a + 88 | 0;
 r = a + 84 | 0;
 s = a + 68 | 0;
 t = a + 52 | 0;
 u = a + 64 | 0;
 v = a + 112 | 0;
 w = a + 92 | 0;
 x = a + 76 | 0;
 f = c[D >> 2] | 0;
 g = y;
 while (1) {
  h = c[E >> 2] | 0;
  i = (c[C >> 2] | 0) - f - h | 0;
  if (h >>> 0 >= (z + g | 0) >>> 0) {
   h = c[F >> 2] | 0;
   bc(h | 0, h + y | 0, y | 0) | 0;
   c[v >> 2] = (c[v >> 2] | 0) - y;
   h = (c[E >> 2] | 0) - y | 0;
   c[E >> 2] = h;
   c[w >> 2] = (c[w >> 2] | 0) - y;
   g = c[x >> 2] | 0;
   f = g;
   g = (c[s >> 2] | 0) + (g << 1) | 0;
   do {
    g = g + -2 | 0;
    n = e[g >> 1] | 0;
    b[g >> 1] = n >>> 0 < y >>> 0 ? 0 : n - y & 65535;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   f = y;
   g = (c[u >> 2] | 0) + (y << 1) | 0;
   do {
    g = g + -2 | 0;
    n = e[g >> 1] | 0;
    b[g >> 1] = n >>> 0 < y >>> 0 ? 0 : n - y & 65535;
    f = f + -1 | 0;
   } while ((f | 0) != 0);
   i = i + y | 0;
  }
  n = c[a >> 2] | 0;
  j = n + 4 | 0;
  k = c[j >> 2] | 0;
  if (!k) break;
  f = c[D >> 2] | 0;
  l = (c[F >> 2] | 0) + h + f | 0;
  g = k >>> 0 > i >>> 0 ? i : k;
  if (!g) g = 0; else {
   c[j >> 2] = k - g;
   bc(l | 0, c[n >> 2] | 0, g | 0) | 0;
   switch (c[(c[n + 28 >> 2] | 0) + 24 >> 2] | 0) {
   case 1:
    {
     m = n + 48 | 0;
     f = c[m >> 2] | 0;
     h = f >>> 16;
     f = f & 65535;
     do if ((g | 0) == 1) {
      f = (d[l >> 0] | 0) + f | 0;
      f = f >>> 0 > 65520 ? f + -65521 | 0 : f;
      l = f + h | 0;
      f = (l >>> 0 > 65520 ? l + 15 | 0 : l) << 16 | f;
     } else if (!l) f = 1; else {
      if (g >>> 0 < 16) {
       j = g;
       i = l;
       while (1) {
        j = j + -1 | 0;
        f = (d[i >> 0] | 0) + f | 0;
        h = f + h | 0;
        if (!j) break; else i = i + 1 | 0;
       }
       f = ((h >>> 0) % 65521 | 0) << 16 | (f >>> 0 > 65520 ? f + -65521 | 0 : f);
       break;
      }
      if (g >>> 0 > 5551) {
       i = g;
       do {
        j = 347;
        k = l;
        while (1) {
         U = (d[k >> 0] | 0) + f | 0;
         T = U + (d[k + 1 >> 0] | 0) | 0;
         S = T + (d[k + 2 >> 0] | 0) | 0;
         R = S + (d[k + 3 >> 0] | 0) | 0;
         Q = R + (d[k + 4 >> 0] | 0) | 0;
         P = Q + (d[k + 5 >> 0] | 0) | 0;
         O = P + (d[k + 6 >> 0] | 0) | 0;
         N = O + (d[k + 7 >> 0] | 0) | 0;
         M = N + (d[k + 8 >> 0] | 0) | 0;
         L = M + (d[k + 9 >> 0] | 0) | 0;
         K = L + (d[k + 10 >> 0] | 0) | 0;
         J = K + (d[k + 11 >> 0] | 0) | 0;
         I = J + (d[k + 12 >> 0] | 0) | 0;
         H = I + (d[k + 13 >> 0] | 0) | 0;
         G = H + (d[k + 14 >> 0] | 0) | 0;
         f = G + (d[k + 15 >> 0] | 0) | 0;
         h = U + h + T + S + R + Q + P + O + N + M + L + K + J + I + H + G + f | 0;
         j = j + -1 | 0;
         if (!j) break; else k = k + 16 | 0;
        }
        i = i + -5552 | 0;
        l = l + 5552 | 0;
        f = (f >>> 0) % 65521 | 0;
        h = (h >>> 0) % 65521 | 0;
       } while (i >>> 0 > 5551);
       if (i) if (i >>> 0 > 15) o = 23; else {
        j = l;
        o = 26;
       }
      } else {
       i = g;
       o = 23;
      }
      if ((o | 0) == 23) {
       k = i + -16 | 0;
       j = l;
       while (1) {
        i = i + -16 | 0;
        G = (d[j >> 0] | 0) + f | 0;
        H = G + (d[j + 1 >> 0] | 0) | 0;
        I = H + (d[j + 2 >> 0] | 0) | 0;
        J = I + (d[j + 3 >> 0] | 0) | 0;
        K = J + (d[j + 4 >> 0] | 0) | 0;
        L = K + (d[j + 5 >> 0] | 0) | 0;
        M = L + (d[j + 6 >> 0] | 0) | 0;
        N = M + (d[j + 7 >> 0] | 0) | 0;
        O = N + (d[j + 8 >> 0] | 0) | 0;
        P = O + (d[j + 9 >> 0] | 0) | 0;
        Q = P + (d[j + 10 >> 0] | 0) | 0;
        R = Q + (d[j + 11 >> 0] | 0) | 0;
        S = R + (d[j + 12 >> 0] | 0) | 0;
        T = S + (d[j + 13 >> 0] | 0) | 0;
        U = T + (d[j + 14 >> 0] | 0) | 0;
        f = U + (d[j + 15 >> 0] | 0) | 0;
        h = G + h + H + I + J + K + L + M + N + O + P + Q + R + S + T + U + f | 0;
        if (i >>> 0 <= 15) break; else j = j + 16 | 0;
       }
       j = k & -16;
       i = k - j | 0;
       if (!i) o = 27; else {
        j = l + (j + 16) | 0;
        o = 26;
       }
      }
      if ((o | 0) == 26) while (1) {
       i = i + -1 | 0;
       f = (d[j >> 0] | 0) + f | 0;
       h = f + h | 0;
       if (!i) {
        o = 27;
        break;
       } else {
        j = j + 1 | 0;
        o = 26;
       }
      }
      if ((o | 0) == 27) {
       o = 0;
       h = (h >>> 0) % 65521 | 0;
       f = (f >>> 0) % 65521 | 0;
      }
      f = h << 16 | f;
     } while (0);
     c[m >> 2] = f;
     break;
    }
   case 2:
    {
     U = n + 48 | 0;
     c[U >> 2] = bb(c[U >> 2] | 0, l, g) | 0;
     break;
    }
   default:
    {}
   }
   c[n >> 2] = (c[n >> 2] | 0) + g;
   f = n + 8 | 0;
   c[f >> 2] = (c[f >> 2] | 0) + g;
   f = c[D >> 2] | 0;
  }
  f = g + f | 0;
  c[D >> 2] = f;
  g = c[A >> 2] | 0;
  a : do if ((g + f | 0) >>> 0 > 2) {
   i = (c[E >> 2] | 0) - g | 0;
   j = c[F >> 2] | 0;
   h = d[j + i >> 0] | 0;
   c[B >> 2] = h;
   k = c[q >> 2] | 0;
   l = c[r >> 2] | 0;
   h = ((d[j + (i + 1) >> 0] | 0) ^ h << k) & l;
   c[B >> 2] = h;
   while (1) {
    if (!g) break a;
    h = ((d[j + (i + 2) >> 0] | 0) ^ h << k) & l;
    c[B >> 2] = h;
    U = (c[s >> 2] | 0) + (h << 1) | 0;
    b[(c[u >> 2] | 0) + ((c[t >> 2] & i) << 1) >> 1] = b[U >> 1] | 0;
    b[U >> 1] = i;
    g = g + -1 | 0;
    c[A >> 2] = g;
    if ((g + f | 0) >>> 0 < 3) break; else i = i + 1 | 0;
   }
  } while (0);
  if (f >>> 0 >= 262) break;
  if (!(c[(c[a >> 2] | 0) + 4 >> 2] | 0)) break;
  g = c[p >> 2] | 0;
 }
 h = a + 5824 | 0;
 i = c[h >> 2] | 0;
 g = c[C >> 2] | 0;
 if (g >>> 0 <= i >>> 0) return;
 f = (c[D >> 2] | 0) + (c[E >> 2] | 0) | 0;
 if (i >>> 0 < f >>> 0) {
  U = g - f | 0;
  U = U >>> 0 > 258 ? 258 : U;
  Xb((c[F >> 2] | 0) + f | 0, 0, U | 0) | 0;
  c[h >> 2] = U + f;
  return;
 }
 f = f + 258 | 0;
 if (f >>> 0 <= i >>> 0) return;
 U = f - i | 0;
 T = g - i | 0;
 U = U >>> 0 > T >>> 0 ? T : U;
 Xb((c[F >> 2] | 0) + i | 0, 0, U | 0) | 0;
 c[h >> 2] = (c[h >> 2] | 0) + U;
 return;
}

function ob(d, f, g) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 var h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0, y = 0, z = 0, A = 0, B = 0, C = 0, D = 0;
 r = b[f + 2 >> 1] | 0;
 k = r << 16 >> 16 == 0;
 B = d + 2754 | 0;
 C = d + 5820 | 0;
 D = d + 2752 | 0;
 s = d + 5816 | 0;
 t = d + 20 | 0;
 u = d + 8 | 0;
 v = d + 2758 | 0;
 w = d + 2756 | 0;
 x = d + 2750 | 0;
 y = d + 2748 | 0;
 h = 0;
 i = -1;
 r = r & 65535;
 j = k ? 138 : 7;
 k = k ? 3 : 4;
 a : while (1) {
  p = h;
  m = 0;
  while (1) {
   if ((p | 0) > (g | 0)) break a;
   p = p + 1 | 0;
   q = b[f + (p << 2) + 2 >> 1] | 0;
   z = q & 65535;
   h = m + 1 | 0;
   A = (r | 0) == (z | 0);
   if (!((h | 0) < (j | 0) & A)) break; else m = h;
  }
  do if ((h | 0) < (k | 0)) {
   n = d + 2684 + (r << 2) + 2 | 0;
   o = d + 2684 + (r << 2) | 0;
   m = h;
   h = c[C >> 2] | 0;
   i = b[s >> 1] | 0;
   do {
    l = e[n >> 1] | 0;
    k = e[o >> 1] | 0;
    j = k << h | i & 65535;
    i = j & 65535;
    b[s >> 1] = i;
    if ((h | 0) > (16 - l | 0)) {
     i = c[t >> 2] | 0;
     c[t >> 2] = i + 1;
     a[(c[u >> 2] | 0) + i >> 0] = j;
     i = (e[s >> 1] | 0) >>> 8 & 255;
     h = c[t >> 2] | 0;
     c[t >> 2] = h + 1;
     a[(c[u >> 2] | 0) + h >> 0] = i;
     h = c[C >> 2] | 0;
     i = k >>> (16 - h | 0) & 65535;
     b[s >> 1] = i;
     h = l + -16 + h | 0;
    } else h = l + h | 0;
    c[C >> 2] = h;
    m = m + -1 | 0;
   } while ((m | 0) != 0);
  } else {
   if (r | 0) {
    if ((r | 0) == (i | 0)) {
     l = h;
     k = c[C >> 2] | 0;
     h = b[s >> 1] | 0;
    } else {
     k = e[d + 2684 + (r << 2) + 2 >> 1] | 0;
     l = c[C >> 2] | 0;
     h = e[d + 2684 + (r << 2) >> 1] | 0;
     i = e[s >> 1] | 0 | h << l;
     j = i & 65535;
     b[s >> 1] = j;
     if ((l | 0) > (16 - k | 0)) {
      j = c[t >> 2] | 0;
      c[t >> 2] = j + 1;
      a[(c[u >> 2] | 0) + j >> 0] = i;
      j = (e[s >> 1] | 0) >>> 8 & 255;
      o = c[t >> 2] | 0;
      c[t >> 2] = o + 1;
      a[(c[u >> 2] | 0) + o >> 0] = j;
      o = c[C >> 2] | 0;
      j = h >>> (16 - o | 0) & 65535;
      b[s >> 1] = j;
      h = k + -16 + o | 0;
     } else h = l + k | 0;
     c[C >> 2] = h;
     l = m;
     k = h;
     h = j;
    }
    j = e[x >> 1] | 0;
    i = e[y >> 1] | 0;
    h = i << k | h & 65535;
    b[s >> 1] = h;
    if ((k | 0) > (16 - j | 0)) {
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = h;
     h = (e[s >> 1] | 0) >>> 8 & 255;
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = h;
     o = c[C >> 2] | 0;
     h = i >>> (16 - o | 0);
     b[s >> 1] = h;
     j = j + -16 + o | 0;
    } else j = j + k | 0;
    c[C >> 2] = j;
    i = l + 65533 & 65535;
    h = i << j | h & 65535;
    b[s >> 1] = h;
    if ((j | 0) > 14) {
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = h;
     o = (e[s >> 1] | 0) >>> 8 & 255;
     h = c[t >> 2] | 0;
     c[t >> 2] = h + 1;
     a[(c[u >> 2] | 0) + h >> 0] = o;
     h = c[C >> 2] | 0;
     b[s >> 1] = i >>> (16 - h | 0);
     h = h + -14 | 0;
    } else h = j + 2 | 0;
    c[C >> 2] = h;
    break;
   }
   if ((h | 0) < 11) {
    i = e[B >> 1] | 0;
    j = c[C >> 2] | 0;
    k = e[D >> 1] | 0;
    h = e[s >> 1] | 0 | k << j;
    b[s >> 1] = h;
    if ((j | 0) > (16 - i | 0)) {
     j = c[t >> 2] | 0;
     c[t >> 2] = j + 1;
     a[(c[u >> 2] | 0) + j >> 0] = h;
     h = (e[s >> 1] | 0) >>> 8 & 255;
     j = c[t >> 2] | 0;
     c[t >> 2] = j + 1;
     a[(c[u >> 2] | 0) + j >> 0] = h;
     j = c[C >> 2] | 0;
     h = k >>> (16 - j | 0);
     b[s >> 1] = h;
     j = i + -16 + j | 0;
    } else j = j + i | 0;
    c[C >> 2] = j;
    i = m + 65534 & 65535;
    h = i << j | h & 65535;
    b[s >> 1] = h;
    if ((j | 0) > 13) {
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = h;
     o = (e[s >> 1] | 0) >>> 8 & 255;
     h = c[t >> 2] | 0;
     c[t >> 2] = h + 1;
     a[(c[u >> 2] | 0) + h >> 0] = o;
     h = c[C >> 2] | 0;
     b[s >> 1] = i >>> (16 - h | 0);
     h = h + -13 | 0;
    } else h = j + 3 | 0;
    c[C >> 2] = h;
    break;
   } else {
    i = e[v >> 1] | 0;
    j = c[C >> 2] | 0;
    k = e[w >> 1] | 0;
    h = e[s >> 1] | 0 | k << j;
    b[s >> 1] = h;
    if ((j | 0) > (16 - i | 0)) {
     j = c[t >> 2] | 0;
     c[t >> 2] = j + 1;
     a[(c[u >> 2] | 0) + j >> 0] = h;
     h = (e[s >> 1] | 0) >>> 8 & 255;
     j = c[t >> 2] | 0;
     c[t >> 2] = j + 1;
     a[(c[u >> 2] | 0) + j >> 0] = h;
     j = c[C >> 2] | 0;
     h = k >>> (16 - j | 0);
     b[s >> 1] = h;
     j = i + -16 + j | 0;
    } else j = j + i | 0;
    c[C >> 2] = j;
    i = m + 65526 & 65535;
    h = i << j | h & 65535;
    b[s >> 1] = h;
    if ((j | 0) > 9) {
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = h;
     o = (e[s >> 1] | 0) >>> 8 & 255;
     h = c[t >> 2] | 0;
     c[t >> 2] = h + 1;
     a[(c[u >> 2] | 0) + h >> 0] = o;
     h = c[C >> 2] | 0;
     b[s >> 1] = i >>> (16 - h | 0);
     h = h + -9 | 0;
    } else h = j + 7 | 0;
    c[C >> 2] = h;
    break;
   }
  } while (0);
  k = q << 16 >> 16 == 0;
  i = r;
  h = p;
  r = z;
  j = k ? 138 : A ? 6 : 7;
  k = k | A ? 3 : 4;
 }
 return;
}

function Sb(a, b) {
 a = a | 0;
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 if (!a) {
  a = Qb(b) | 0;
  return a | 0;
 }
 if (b >>> 0 > 4294967231) {
  if (!(c[5123] | 0)) d = 20536; else d = c[(ec() | 0) + 64 >> 2] | 0;
  c[d >> 2] = 12;
  a = 0;
  return a | 0;
 }
 n = b >>> 0 < 11 ? 16 : b + 11 & -8;
 m = a + -8 | 0;
 p = a + -4 | 0;
 o = c[p >> 2] | 0;
 d = o & -8;
 j = a + (d + -8) | 0;
 h = c[5139] | 0;
 e = o & 3;
 if (!((e | 0) != 1 & m >>> 0 >= h >>> 0 & (d | 0) > 0)) ma();
 f = c[j + 4 >> 2] | 0;
 if (!(f & 1)) ma();
 do if (!e) {
  if (!(n >>> 0 < 256 | d >>> 0 < (n | 4) >>> 0)) if ((d - n | 0) >>> 0 <= c[5255] << 1 >>> 0) return a | 0;
 } else {
  if (d >>> 0 >= n >>> 0) {
   d = d - n | 0;
   if (d >>> 0 <= 15) return a | 0;
   m = m + n | 0;
   c[p >> 2] = o & 1 | n | 2;
   c[m + 4 >> 2] = d | 3;
   p = m + d + 4 | 0;
   c[p >> 2] = c[p >> 2] | 1;
   Tb(m, d);
   return a | 0;
  }
  if ((j | 0) == (c[5141] | 0)) {
   d = (c[5138] | 0) + d | 0;
   if (d >>> 0 <= n >>> 0) break;
   l = d - n | 0;
   m = m + n | 0;
   c[p >> 2] = o & 1 | n | 2;
   c[m + 4 >> 2] = l | 1;
   c[5141] = m;
   c[5138] = l;
   return a | 0;
  }
  if ((j | 0) == (c[5140] | 0)) {
   e = (c[5137] | 0) + d | 0;
   if (e >>> 0 < n >>> 0) break;
   d = e - n | 0;
   if (d >>> 0 > 15) {
    e = m + n | 0;
    m = e + d | 0;
    c[p >> 2] = o & 1 | n | 2;
    c[e + 4 >> 2] = d | 1;
    c[m >> 2] = d;
    p = m + 4 | 0;
    c[p >> 2] = c[p >> 2] & -2;
   } else {
    c[p >> 2] = o & 1 | e | 2;
    e = m + e + 4 | 0;
    c[e >> 2] = c[e >> 2] | 1;
    e = 0;
    d = 0;
   }
   c[5137] = d;
   c[5140] = e;
   return a | 0;
  }
  if (!(f & 2)) {
   l = (f & -8) + d | 0;
   if (l >>> 0 >= n >>> 0) {
    k = l - n | 0;
    b = f >>> 3;
    do if (f >>> 0 < 256) {
     e = c[j + 8 >> 2] | 0;
     f = c[j + 12 >> 2] | 0;
     d = 20580 + (b << 1 << 2) | 0;
     if ((e | 0) != (d | 0)) {
      if (e >>> 0 < h >>> 0) ma();
      if ((c[e + 12 >> 2] | 0) != (j | 0)) ma();
     }
     if ((f | 0) == (e | 0)) {
      c[5135] = c[5135] & ~(1 << b);
      break;
     }
     if ((f | 0) == (d | 0)) g = f + 8 | 0; else {
      if (f >>> 0 < h >>> 0) ma();
      d = f + 8 | 0;
      if ((c[d >> 2] | 0) == (j | 0)) g = d; else ma();
     }
     c[e + 12 >> 2] = f;
     c[g >> 2] = e;
    } else {
     g = c[j + 24 >> 2] | 0;
     f = c[j + 12 >> 2] | 0;
     do if ((f | 0) == (j | 0)) {
      f = j + 16 | 0;
      e = f + 4 | 0;
      d = c[e >> 2] | 0;
      if (!d) {
       d = c[f >> 2] | 0;
       if (!d) {
        i = 0;
        break;
       } else e = f;
      }
      while (1) {
       f = d + 20 | 0;
       b = c[f >> 2] | 0;
       if (b | 0) {
        d = b;
        e = f;
        continue;
       }
       f = d + 16 | 0;
       b = c[f >> 2] | 0;
       if (!b) break; else {
        d = b;
        e = f;
       }
      }
      if (e >>> 0 < h >>> 0) ma(); else {
       c[e >> 2] = 0;
       i = d;
       break;
      }
     } else {
      b = c[j + 8 >> 2] | 0;
      if (b >>> 0 < h >>> 0) ma();
      d = b + 12 | 0;
      if ((c[d >> 2] | 0) != (j | 0)) ma();
      e = f + 8 | 0;
      if ((c[e >> 2] | 0) == (j | 0)) {
       c[d >> 2] = f;
       c[e >> 2] = b;
       i = f;
       break;
      } else ma();
     } while (0);
     if (g | 0) {
      d = c[j + 28 >> 2] | 0;
      e = 20844 + (d << 2) | 0;
      if ((j | 0) == (c[e >> 2] | 0)) {
       c[e >> 2] = i;
       if (!i) {
        c[5136] = c[5136] & ~(1 << d);
        break;
       }
      } else {
       if (g >>> 0 < (c[5139] | 0) >>> 0) ma();
       d = g + 16 | 0;
       if ((c[d >> 2] | 0) == (j | 0)) c[d >> 2] = i; else c[g + 20 >> 2] = i;
       if (!i) break;
      }
      f = c[5139] | 0;
      if (i >>> 0 < f >>> 0) ma();
      c[i + 24 >> 2] = g;
      d = j + 16 | 0;
      e = c[d >> 2] | 0;
      do if (e | 0) if (e >>> 0 < f >>> 0) ma(); else {
       c[i + 16 >> 2] = e;
       c[e + 24 >> 2] = i;
       break;
      } while (0);
      d = c[d + 4 >> 2] | 0;
      if (d | 0) if (d >>> 0 < (c[5139] | 0) >>> 0) ma(); else {
       c[i + 20 >> 2] = d;
       c[d + 24 >> 2] = i;
       break;
      }
     }
    } while (0);
    if (k >>> 0 < 16) {
     c[p >> 2] = o & 1 | l | 2;
     p = m + l + 4 | 0;
     c[p >> 2] = c[p >> 2] | 1;
     return a | 0;
    } else {
     m = m + n | 0;
     c[p >> 2] = o & 1 | n | 2;
     c[m + 4 >> 2] = k | 3;
     p = m + k + 4 | 0;
     c[p >> 2] = c[p >> 2] | 1;
     Tb(m, k);
     return a | 0;
    }
   }
  }
 } while (0);
 d = Qb(b) | 0;
 if (!d) {
  a = 0;
  return a | 0;
 }
 p = c[p >> 2] | 0;
 p = (p & -8) - ((p & 3 | 0) == 0 ? 8 : 4) | 0;
 bc(d | 0, a | 0, (p >>> 0 < b >>> 0 ? p : b) | 0) | 0;
 Rb(a);
 a = d;
 return a | 0;
}

function nb(f, g, h) {
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0, w = 0, x = 0;
 v = f + 5792 | 0;
 if (!(c[v >> 2] | 0)) {
  l = f + 5820 | 0;
  i = f + 5816 | 0;
  n = i;
  m = l;
  l = c[l >> 2] | 0;
  i = b[i >> 1] | 0;
 } else {
  w = f + 5796 | 0;
  x = f + 5784 | 0;
  m = f + 5820 | 0;
  n = f + 5816 | 0;
  t = f + 20 | 0;
  u = f + 8 | 0;
  s = 0;
  do {
   p = b[(c[w >> 2] | 0) + (s << 1) >> 1] | 0;
   r = p & 65535;
   q = d[(c[x >> 2] | 0) + s >> 0] | 0;
   s = s + 1 | 0;
   if (!(p << 16 >> 16)) {
    l = e[g + (q << 2) + 2 >> 1] | 0;
    o = c[m >> 2] | 0;
    j = e[g + (q << 2) >> 1] | 0;
    k = e[n >> 1] | 0 | j << o;
    i = k & 65535;
    b[n >> 1] = i;
    if ((o | 0) > (16 - l | 0)) {
     i = c[t >> 2] | 0;
     c[t >> 2] = i + 1;
     a[(c[u >> 2] | 0) + i >> 0] = k;
     i = (e[n >> 1] | 0) >>> 8 & 255;
     r = c[t >> 2] | 0;
     c[t >> 2] = r + 1;
     a[(c[u >> 2] | 0) + r >> 0] = i;
     r = c[m >> 2] | 0;
     i = j >>> (16 - r | 0) & 65535;
     b[n >> 1] = i;
     l = l + -16 + r | 0;
    } else l = o + l | 0;
    c[m >> 2] = l;
   } else {
    p = d[17732 + q >> 0] | 0;
    i = (p | 256) + 1 | 0;
    l = e[g + (i << 2) + 2 >> 1] | 0;
    o = c[m >> 2] | 0;
    i = e[g + (i << 2) >> 1] | 0;
    k = e[n >> 1] | 0 | i << o;
    j = k & 65535;
    b[n >> 1] = j;
    if ((o | 0) > (16 - l | 0)) {
     j = c[t >> 2] | 0;
     c[t >> 2] = j + 1;
     a[(c[u >> 2] | 0) + j >> 0] = k;
     j = (e[n >> 1] | 0) >>> 8 & 255;
     o = c[t >> 2] | 0;
     c[t >> 2] = o + 1;
     a[(c[u >> 2] | 0) + o >> 0] = j;
     o = c[m >> 2] | 0;
     j = i >>> (16 - o | 0) & 65535;
     b[n >> 1] = j;
     l = l + -16 + o | 0;
    } else l = o + l | 0;
    c[m >> 2] = l;
    o = c[13688 + (p << 2) >> 2] | 0;
    if ((p + -8 | 0) >>> 0 < 20) {
     k = q - (c[13804 + (p << 2) >> 2] | 0) & 65535;
     i = k << l | j & 65535;
     j = i & 65535;
     b[n >> 1] = j;
     if ((l | 0) > (16 - o | 0)) {
      j = c[t >> 2] | 0;
      c[t >> 2] = j + 1;
      a[(c[u >> 2] | 0) + j >> 0] = i;
      j = (e[n >> 1] | 0) >>> 8 & 255;
      i = c[t >> 2] | 0;
      c[t >> 2] = i + 1;
      a[(c[u >> 2] | 0) + i >> 0] = j;
      i = c[m >> 2] | 0;
      j = k >>> (16 - i | 0) & 65535;
      b[n >> 1] = j;
      i = o + -16 + i | 0;
     } else i = o + l | 0;
     c[m >> 2] = i;
     o = i;
    } else o = l;
    p = r + -1 | 0;
    q = d[17220 + (p >>> 0 < 256 ? p : (p >>> 7) + 256 | 0) >> 0] | 0;
    k = e[h + (q << 2) + 2 >> 1] | 0;
    l = e[h + (q << 2) >> 1] | 0;
    j = l << o | j & 65535;
    i = j & 65535;
    b[n >> 1] = i;
    if ((o | 0) > (16 - k | 0)) {
     i = c[t >> 2] | 0;
     c[t >> 2] = i + 1;
     a[(c[u >> 2] | 0) + i >> 0] = j;
     i = (e[n >> 1] | 0) >>> 8 & 255;
     r = c[t >> 2] | 0;
     c[t >> 2] = r + 1;
     a[(c[u >> 2] | 0) + r >> 0] = i;
     r = c[m >> 2] | 0;
     i = l >>> (16 - r | 0) & 65535;
     b[n >> 1] = i;
     l = k + -16 + r | 0;
    } else l = k + o | 0;
    c[m >> 2] = l;
    o = c[13568 + (q << 2) >> 2] | 0;
    if ((q + -4 | 0) >>> 0 < 26) {
     k = p - (c[13920 + (q << 2) >> 2] | 0) & 65535;
     j = k << l | i & 65535;
     i = j & 65535;
     b[n >> 1] = i;
     if ((l | 0) > (16 - o | 0)) {
      i = c[t >> 2] | 0;
      c[t >> 2] = i + 1;
      a[(c[u >> 2] | 0) + i >> 0] = j;
      i = (e[n >> 1] | 0) >>> 8 & 255;
      l = c[t >> 2] | 0;
      c[t >> 2] = l + 1;
      a[(c[u >> 2] | 0) + l >> 0] = i;
      l = c[m >> 2] | 0;
      i = k >>> (16 - l | 0) & 65535;
      b[n >> 1] = i;
      l = o + -16 + l | 0;
     } else l = o + l | 0;
     c[m >> 2] = l;
    }
   }
  } while (s >>> 0 < (c[v >> 2] | 0) >>> 0);
 }
 k = e[g + 1026 >> 1] | 0;
 j = e[g + 1024 >> 1] | 0;
 i = j << l | i & 65535;
 b[n >> 1] = i;
 if ((l | 0) > (16 - k | 0)) {
  w = f + 20 | 0;
  x = c[w >> 2] | 0;
  c[w >> 2] = x + 1;
  g = f + 8 | 0;
  a[(c[g >> 2] | 0) + x >> 0] = i;
  x = (e[n >> 1] | 0) >>> 8 & 255;
  f = c[w >> 2] | 0;
  c[w >> 2] = f + 1;
  a[(c[g >> 2] | 0) + f >> 0] = x;
  f = c[m >> 2] | 0;
  b[n >> 1] = j >>> (16 - f | 0);
  f = k + -16 + f | 0;
  c[m >> 2] = f;
  return;
 } else {
  f = k + l | 0;
  c[m >> 2] = f;
  return;
 }
}

function cb(d, f) {
 d = d | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 if (!d) {
  p = -2;
  return p | 0;
 }
 l = d + 24 | 0;
 c[l >> 2] = 0;
 m = d + 32 | 0;
 g = c[m >> 2] | 0;
 if (!g) {
  c[m >> 2] = 5;
  c[d + 40 >> 2] = 0;
  g = 5;
 }
 o = d + 36 | 0;
 if (!(c[o >> 2] | 0)) c[o >> 2] = 1;
 k = (f | 0) == -1 ? 6 : f;
 if (k >>> 0 > 9) {
  p = -2;
  return p | 0;
 }
 n = d + 40 | 0;
 g = Ba[g & 7](c[n >> 2] | 0, 1, 5828) | 0;
 if (!g) {
  p = -4;
  return p | 0;
 }
 p = d + 28 | 0;
 c[p >> 2] = g;
 c[g >> 2] = d;
 c[g + 24 >> 2] = 0;
 c[g + 28 >> 2] = 0;
 c[g + 48 >> 2] = 15;
 h = g + 44 | 0;
 c[h >> 2] = 32768;
 c[g + 52 >> 2] = 32767;
 c[g + 80 >> 2] = 15;
 j = g + 76 | 0;
 c[j >> 2] = 32768;
 c[g + 84 >> 2] = 32767;
 c[g + 88 >> 2] = 5;
 q = g + 56 | 0;
 c[q >> 2] = Ba[c[m >> 2] & 7](c[n >> 2] | 0, 32768, 2) | 0;
 f = g + 64 | 0;
 c[f >> 2] = Ba[c[m >> 2] & 7](c[n >> 2] | 0, c[h >> 2] | 0, 2) | 0;
 h = g + 68 | 0;
 c[h >> 2] = Ba[c[m >> 2] & 7](c[n >> 2] | 0, c[j >> 2] | 0, 2) | 0;
 c[g + 5824 >> 2] = 0;
 j = g + 5788 | 0;
 c[j >> 2] = 16384;
 i = Ba[c[m >> 2] & 7](c[n >> 2] | 0, 16384, 4) | 0;
 c[g + 8 >> 2] = i;
 j = c[j >> 2] | 0;
 c[g + 12 >> 2] = j << 2;
 if (c[q >> 2] | 0) if (c[f >> 2] | 0) if (!((i | 0) == 0 | (c[h >> 2] | 0) == 0)) {
  c[g + 5796 >> 2] = i + (j >>> 1 << 1);
  c[g + 5784 >> 2] = i + (j * 3 | 0);
  c[g + 132 >> 2] = k;
  c[g + 136 >> 2] = 0;
  a[g + 36 >> 0] = 8;
  i = c[p >> 2] | 0;
  if (!i) {
   q = -2;
   return q | 0;
  }
  if (!(c[m >> 2] | 0)) {
   q = -2;
   return q | 0;
  }
  if (!(c[o >> 2] | 0)) {
   q = -2;
   return q | 0;
  }
  c[d + 20 >> 2] = 0;
  c[d + 8 >> 2] = 0;
  c[l >> 2] = 0;
  c[d + 44 >> 2] = 2;
  c[i + 20 >> 2] = 0;
  c[i + 16 >> 2] = c[i + 8 >> 2];
  f = i + 24 | 0;
  g = c[f >> 2] | 0;
  h = 0 - g | 0;
  if ((g | 0) < 0) {
   c[f >> 2] = h;
   g = h;
  }
  c[i + 4 >> 2] = g | 0 ? 42 : 113;
  c[d + 48 >> 2] = (g | 0) != 2 & 1;
  c[i + 40 >> 2] = 0;
  c[i + 2840 >> 2] = i + 148;
  c[i + 2848 >> 2] = 13432;
  c[i + 2852 >> 2] = i + 2440;
  c[i + 2860 >> 2] = 13452;
  c[i + 2864 >> 2] = i + 2684;
  c[i + 2872 >> 2] = 13472;
  b[i + 5816 >> 1] = 0;
  c[i + 5820 >> 2] = 0;
  jb(i);
  q = c[p >> 2] | 0;
  c[q + 60 >> 2] = c[q + 44 >> 2] << 1;
  p = c[q + 76 >> 2] | 0;
  o = c[q + 68 >> 2] | 0;
  b[o + (p + -1 << 1) >> 1] = 0;
  Xb(o | 0, 0, (p << 1) + -2 | 0) | 0;
  p = c[q + 132 >> 2] | 0;
  c[q + 128 >> 2] = e[13312 + (p * 12 | 0) + 2 >> 1];
  c[q + 140 >> 2] = e[13312 + (p * 12 | 0) >> 1];
  c[q + 144 >> 2] = e[13312 + (p * 12 | 0) + 4 >> 1];
  c[q + 124 >> 2] = e[13312 + (p * 12 | 0) + 6 >> 1];
  c[q + 108 >> 2] = 0;
  c[q + 92 >> 2] = 0;
  c[q + 116 >> 2] = 0;
  c[q + 5812 >> 2] = 0;
  c[q + 120 >> 2] = 2;
  c[q + 96 >> 2] = 2;
  c[q + 104 >> 2] = 0;
  c[q + 72 >> 2] = 0;
  q = 0;
  return q | 0;
 }
 c[g + 4 >> 2] = 666;
 c[l >> 2] = 18020;
 g = c[p >> 2] | 0;
 if (!g) {
  q = -4;
  return q | 0;
 }
 switch (c[g + 4 >> 2] | 0) {
 case 42:
 case 69:
 case 73:
 case 91:
 case 103:
 case 113:
 case 666:
  break;
 default:
  {
   q = -4;
   return q | 0;
  }
 }
 f = c[g + 8 >> 2] | 0;
 if (f) {
  Da[c[o >> 2] & 1](c[n >> 2] | 0, f);
  g = c[p >> 2] | 0;
 }
 f = c[g + 68 >> 2] | 0;
 if (f) {
  Da[c[o >> 2] & 1](c[n >> 2] | 0, f);
  g = c[p >> 2] | 0;
 }
 f = c[g + 64 >> 2] | 0;
 if (f) {
  Da[c[o >> 2] & 1](c[n >> 2] | 0, f);
  g = c[p >> 2] | 0;
 }
 f = c[g + 56 >> 2] | 0;
 if (f) {
  Da[c[o >> 2] & 1](c[n >> 2] | 0, f);
  g = c[p >> 2] | 0;
 }
 Da[c[o >> 2] & 1](c[n >> 2] | 0, g);
 c[p >> 2] = 0;
 q = -4;
 return q | 0;
}

function _b(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
 l = a;
 j = b;
 k = j;
 h = d;
 n = e;
 i = n;
 if (!k) {
  g = (f | 0) != 0;
  if (!i) {
   if (g) {
    c[f >> 2] = (l >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (l >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  } else {
   if (!g) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
 }
 g = (i | 0) == 0;
 do if (!h) {
  if (g) {
   if (f | 0) {
    c[f >> 2] = (k >>> 0) % (h >>> 0);
    c[f + 4 >> 2] = 0;
   }
   n = 0;
   f = (k >>> 0) / (h >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  if (!l) {
   if (f | 0) {
    c[f >> 2] = 0;
    c[f + 4 >> 2] = (k >>> 0) % (i >>> 0);
   }
   n = 0;
   f = (k >>> 0) / (i >>> 0) >>> 0;
   return (D = n, f) | 0;
  }
  g = i - 1 | 0;
  if (!(g & i)) {
   if (f | 0) {
    c[f >> 2] = a | 0;
    c[f + 4 >> 2] = g & k | b & 0;
   }
   n = 0;
   f = k >>> ((qa(i | 0) | 0) >>> 0);
   return (D = n, f) | 0;
  }
  g = (V(i | 0) | 0) - (V(k | 0) | 0) | 0;
  if (g >>> 0 <= 30) {
   b = g + 1 | 0;
   i = 31 - g | 0;
   h = b;
   a = k << i | l >>> (b >>> 0);
   b = k >>> (b >>> 0);
   g = 0;
   i = l << i;
   break;
  }
  if (!f) {
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  c[f >> 2] = a | 0;
  c[f + 4 >> 2] = j | b & 0;
  n = 0;
  f = 0;
  return (D = n, f) | 0;
 } else {
  if (!g) {
   g = (V(i | 0) | 0) - (V(k | 0) | 0) | 0;
   if (g >>> 0 <= 31) {
    m = g + 1 | 0;
    i = 31 - g | 0;
    b = g - 31 >> 31;
    h = m;
    a = l >>> (m >>> 0) & b | k << i;
    b = k >>> (m >>> 0) & b;
    g = 0;
    i = l << i;
    break;
   }
   if (!f) {
    n = 0;
    f = 0;
    return (D = n, f) | 0;
   }
   c[f >> 2] = a | 0;
   c[f + 4 >> 2] = j | b & 0;
   n = 0;
   f = 0;
   return (D = n, f) | 0;
  }
  g = h - 1 | 0;
  if (g & h | 0) {
   i = (V(h | 0) | 0) + 33 - (V(k | 0) | 0) | 0;
   p = 64 - i | 0;
   m = 32 - i | 0;
   j = m >> 31;
   o = i - 32 | 0;
   b = o >> 31;
   h = i;
   a = m - 1 >> 31 & k >>> (o >>> 0) | (k << m | l >>> (i >>> 0)) & b;
   b = b & k >>> (i >>> 0);
   g = l << p & j;
   i = (k << p | l >>> (o >>> 0)) & j | l << m & i - 33 >> 31;
   break;
  }
  if (f | 0) {
   c[f >> 2] = g & l;
   c[f + 4 >> 2] = 0;
  }
  if ((h | 0) == 1) {
   o = j | b & 0;
   p = a | 0 | 0;
   return (D = o, p) | 0;
  } else {
   p = qa(h | 0) | 0;
   o = k >>> (p >>> 0) | 0;
   p = k << 32 - p | l >>> (p >>> 0) | 0;
   return (D = o, p) | 0;
  }
 } while (0);
 if (!h) {
  k = i;
  j = 0;
  i = 0;
 } else {
  m = d | 0 | 0;
  l = n | e & 0;
  k = Wb(m | 0, l | 0, -1, -1) | 0;
  d = D;
  j = i;
  i = 0;
  do {
   e = j;
   j = g >>> 31 | j << 1;
   g = i | g << 1;
   e = a << 1 | e >>> 31 | 0;
   n = a >>> 31 | b << 1 | 0;
   Vb(k | 0, d | 0, e | 0, n | 0) | 0;
   p = D;
   o = p >> 31 | ((p | 0) < 0 ? -1 : 0) << 1;
   i = o & 1;
   a = Vb(e | 0, n | 0, o & m | 0, (((p | 0) < 0 ? -1 : 0) >> 31 | ((p | 0) < 0 ? -1 : 0) << 1) & l | 0) | 0;
   b = D;
   h = h - 1 | 0;
  } while ((h | 0) != 0);
  k = j;
  j = 0;
 }
 h = 0;
 if (f | 0) {
  c[f >> 2] = a;
  c[f + 4 >> 2] = b;
 }
 o = (g | 0) >>> 31 | (k | h) << 1 | (h << 1 | g >>> 31) & 0 | j;
 p = (g << 1 | 0 >>> 31) & -2 | i;
 return (D = o, p) | 0;
}

function Kb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0;
 o = i;
 i = i + 128 | 0;
 f = o + 120 | 0;
 n = o + 104 | 0;
 k = o + 88 | 0;
 j = o + 80 | 0;
 h = o + 64 | 0;
 m = o;
 e = a[d >> 0] | 0;
 do if (!(Db(20477, e << 24 >> 24, 4) | 0)) {
  if (!(c[5123] | 0)) b = 20536; else b = c[(ec() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 22;
  b = 0;
 } else {
  l = Jb(d, 43) | 0;
  l = (l | 0) == 0 | (a[l >> 0] | 0) != 43 ? e << 24 >> 24 != 114 & 1 : 2;
  g = Jb(d, 120) | 0;
  l = (g | 0) == 0 | (a[g >> 0] | 0) != 120 ? l : l | 128;
  g = Jb(d, 101) | 0;
  l = (g | 0) == 0 | (a[g >> 0] | 0) != 101 ? l : l | 524288;
  l = e << 24 >> 24 == 114 ? l : l | 64;
  l = e << 24 >> 24 == 119 ? l | 512 : l;
  c[m >> 2] = b;
  c[m + 4 >> 2] = (e << 24 >> 24 == 97 ? l | 1024 : l) | 32768;
  c[m + 8 >> 2] = 438;
  l = pa(5, m | 0) | 0;
  if (l >>> 0 > 4294963200) {
   if (!(c[5123] | 0)) b = 20536; else b = c[(ec() | 0) + 64 >> 2] | 0;
   c[b >> 2] = 0 - l;
   b = 0;
   break;
  }
  if ((l | 0) < 0) b = 0; else {
   e = a[d >> 0] | 0;
   if (!(Db(20477, e << 24 >> 24, 4) | 0)) {
    if (!(c[5123] | 0)) b = 20536; else b = c[(ec() | 0) + 64 >> 2] | 0;
    c[b >> 2] = 22;
   } else {
    b = Qb(1144) | 0;
    if (b | 0) {
     f = b;
     g = f + 112 | 0;
     do {
      c[f >> 2] = 0;
      f = f + 4 | 0;
     } while ((f | 0) < (g | 0));
     g = Jb(d, 43) | 0;
     if ((g | 0) == 0 | (a[g >> 0] | 0) != 43) c[b >> 2] = e << 24 >> 24 == 114 ? 8 : 4;
     g = Jb(d, 101) | 0;
     if (!((g | 0) == 0 | (a[g >> 0] | 0) != 101)) {
      c[h >> 2] = l;
      c[h + 4 >> 2] = 2;
      c[h + 8 >> 2] = 1;
      ia(221, h | 0) | 0;
      e = a[d >> 0] | 0;
     }
     if (e << 24 >> 24 == 97) {
      c[j >> 2] = l;
      c[j + 4 >> 2] = 3;
      e = ia(221, j | 0) | 0;
      if (!(e & 1024)) {
       c[k >> 2] = l;
       c[k + 4 >> 2] = 4;
       c[k + 8 >> 2] = e | 1024;
       ia(221, k | 0) | 0;
      }
      f = c[b >> 2] | 128;
      c[b >> 2] = f;
     } else f = c[b >> 2] | 0;
     c[b + 60 >> 2] = l;
     c[b + 44 >> 2] = b + 120;
     c[b + 48 >> 2] = 1024;
     e = b + 75 | 0;
     a[e >> 0] = -1;
     if (!(f & 8)) {
      c[n >> 2] = l;
      c[n + 4 >> 2] = 21505;
      c[n + 8 >> 2] = m;
      if (!(sa(54, n | 0) | 0)) a[e >> 0] = 10;
     }
     c[b + 32 >> 2] = 1;
     c[b + 36 >> 2] = 6;
     c[b + 40 >> 2] = 2;
     c[b + 12 >> 2] = 1;
     if (!(c[5124] | 0)) c[b + 76 >> 2] = -1;
     la(20520);
     e = c[5129] | 0;
     c[b + 56 >> 2] = e;
     if (e | 0) c[e + 52 >> 2] = b;
     c[5129] = b;
     ja(20520);
     break;
    }
   }
   c[f >> 2] = l;
   oa(6, f | 0) | 0;
   b = 0;
  }
 } while (0);
 i = o;
 return b | 0;
}

function bb(a, b, e) {
 a = a | 0;
 b = b | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 if (!b) {
  h = 0;
  return h | 0;
 }
 a = ~a;
 a : do if (e) {
  while (1) {
   if (!(b & 3)) break;
   a = c[5120 + (((d[b >> 0] | 0) ^ a & 255) << 2) >> 2] ^ a >>> 8;
   e = e + -1 | 0;
   if (!e) break a; else b = b + 1 | 0;
  }
  if (e >>> 0 > 31) {
   g = e + -32 | 0;
   h = g & -32;
   f = b;
   while (1) {
    i = c[f >> 2] ^ a;
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 4 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 8 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 12 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 16 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 20 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 24 >> 2];
    i = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2] ^ c[f + 28 >> 2];
    a = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2];
    e = e + -32 | 0;
    if (e >>> 0 <= 31) break; else f = f + 32 | 0;
   }
   b = b + (h + 32) | 0;
   e = g - h | 0;
  }
  if (e >>> 0 > 3) {
   g = e + -4 | 0;
   f = b;
   while (1) {
    i = c[f >> 2] ^ a;
    a = c[7168 + ((i >>> 8 & 255) << 2) >> 2] ^ c[8192 + ((i & 255) << 2) >> 2] ^ c[6144 + ((i >>> 16 & 255) << 2) >> 2] ^ c[5120 + (i >>> 24 << 2) >> 2];
    e = e + -4 | 0;
    if (e >>> 0 <= 3) break; else f = f + 4 | 0;
   }
   e = g >>> 2;
   b = b + (e + 1 << 2) | 0;
   e = g - (e << 2) | 0;
  }
  if (e) while (1) {
   a = c[5120 + (((d[b >> 0] | 0) ^ a & 255) << 2) >> 2] ^ a >>> 8;
   e = e + -1 | 0;
   if (!e) break; else b = b + 1 | 0;
  }
 } while (0);
 i = ~a;
 return i | 0;
}

function hb(b, d) {
 b = b | 0;
 d = d | 0;
 var f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0, r = 0, s = 0, t = 0, u = 0, v = 0;
 j = c[b + 124 >> 2] | 0;
 t = c[b + 56 >> 2] | 0;
 o = c[b + 108 >> 2] | 0;
 u = t + o | 0;
 i = c[b + 120 >> 2] | 0;
 n = c[b + 144 >> 2] | 0;
 m = (c[b + 44 >> 2] | 0) + -262 | 0;
 m = o >>> 0 > m >>> 0 ? o - m | 0 : 0;
 o = c[b + 64 >> 2] | 0;
 p = c[b + 52 >> 2] | 0;
 v = c[b + 116 >> 2] | 0;
 n = n >>> 0 > v >>> 0 ? v : n;
 q = b + 112 | 0;
 r = u + 1 | 0;
 s = u + 258 | 0;
 f = a[u + i >> 0] | 0;
 k = a[u + (i + -1) >> 0] | 0;
 l = d;
 d = i;
 j = i >>> 0 < (c[b + 140 >> 2] | 0) >>> 0 ? j : j >>> 2;
 while (1) {
  b = t + l | 0;
  if ((a[b + d >> 0] | 0) == f << 24 >> 24) if ((a[b + (d + -1) >> 0] | 0) == k << 24 >> 24) if ((a[b >> 0] | 0) == (a[u >> 0] | 0)) {
   b = b + 1 | 0;
   if ((a[b >> 0] | 0) == (a[r >> 0] | 0)) {
    i = 2;
    h = b;
    do {
     g = u + i | 0;
     b = g + 1 | 0;
     if ((a[b >> 0] | 0) != (a[h + 2 >> 0] | 0)) break;
     b = g + 2 | 0;
     if ((a[b >> 0] | 0) != (a[h + 3 >> 0] | 0)) break;
     b = g + 3 | 0;
     if ((a[b >> 0] | 0) != (a[h + 4 >> 0] | 0)) break;
     b = g + 4 | 0;
     if ((a[b >> 0] | 0) != (a[h + 5 >> 0] | 0)) break;
     b = g + 5 | 0;
     if ((a[b >> 0] | 0) != (a[h + 6 >> 0] | 0)) break;
     b = g + 6 | 0;
     if ((a[b >> 0] | 0) != (a[h + 7 >> 0] | 0)) break;
     b = g + 7 | 0;
     g = h;
     h = h + 8 | 0;
     if ((a[b >> 0] | 0) != (a[h >> 0] | 0)) break;
     i = i + 8 | 0;
     b = u + i | 0;
    } while ((i | 0) < 258 ? (a[b >> 0] | 0) == (a[g + 9 >> 0] | 0) : 0);
    b = b - s | 0;
    g = b + 258 | 0;
    if ((g | 0) > (d | 0)) {
     c[q >> 2] = l;
     if ((g | 0) >= (n | 0)) {
      d = g;
      b = 19;
      break;
     }
     f = a[u + g >> 0] | 0;
     b = a[u + (b + 257) >> 0] | 0;
     d = g;
    } else b = k;
   } else b = k;
  } else b = k; else b = k; else b = k;
  l = e[o + ((l & p) << 1) >> 1] | 0;
  if (l >>> 0 <= m >>> 0) {
   b = 19;
   break;
  }
  j = j + -1 | 0;
  if (!j) {
   b = 19;
   break;
  } else k = b;
 }
 if ((b | 0) == 19) return (d >>> 0 > v >>> 0 ? v : d) | 0;
 return 0;
}

function Bb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0.0;
 a : do if (b >>> 0 <= 20) do switch (b | 0) {
 case 9:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   c[a >> 2] = b;
   break a;
  }
 case 10:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = ((b | 0) < 0) << 31 >> 31;
   break a;
  }
 case 11:
  {
   e = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   b = c[e >> 2] | 0;
   c[d >> 2] = e + 4;
   e = a;
   c[e >> 2] = b;
   c[e + 4 >> 2] = 0;
   break a;
  }
 case 12:
  {
   e = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   b = e;
   f = c[b >> 2] | 0;
   b = c[b + 4 >> 2] | 0;
   c[d >> 2] = e + 8;
   e = a;
   c[e >> 2] = f;
   c[e + 4 >> 2] = b;
   break a;
  }
 case 13:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 65535) << 16 >> 16;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 14:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 65535;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 15:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   e = (e & 255) << 24 >> 24;
   f = a;
   c[f >> 2] = e;
   c[f + 4 >> 2] = ((e | 0) < 0) << 31 >> 31;
   break a;
  }
 case 16:
  {
   f = (c[d >> 2] | 0) + (4 - 1) & ~(4 - 1);
   e = c[f >> 2] | 0;
   c[d >> 2] = f + 4;
   f = a;
   c[f >> 2] = e & 255;
   c[f + 4 >> 2] = 0;
   break a;
  }
 case 17:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 case 18:
  {
   f = (c[d >> 2] | 0) + (8 - 1) & ~(8 - 1);
   g = +h[f >> 3];
   c[d >> 2] = f + 8;
   h[a >> 3] = g;
   break a;
  }
 default:
  break a;
 } while (0); while (0);
 return;
}

function sb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 q = i;
 i = i + 48 | 0;
 n = q + 16 | 0;
 m = q;
 j = q + 32 | 0;
 o = a + 28 | 0;
 h = c[o >> 2] | 0;
 c[j >> 2] = h;
 p = a + 20 | 0;
 h = (c[p >> 2] | 0) - h | 0;
 c[j + 4 >> 2] = h;
 c[j + 8 >> 2] = b;
 c[j + 12 >> 2] = d;
 k = a + 60 | 0;
 l = a + 44 | 0;
 f = 2;
 h = h + d | 0;
 while (1) {
  if (!(c[5123] | 0)) {
   c[n >> 2] = c[k >> 2];
   c[n + 4 >> 2] = j;
   c[n + 8 >> 2] = f;
   b = xa(146, n | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[5123] | 0)) e = 20536; else e = c[(ec() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
  } else {
   na(1, a | 0);
   c[m >> 2] = c[k >> 2];
   c[m + 4 >> 2] = j;
   c[m + 8 >> 2] = f;
   b = xa(146, m | 0) | 0;
   if (b >>> 0 > 4294963200) {
    if (!(c[5123] | 0)) e = 20536; else e = c[(ec() | 0) + 64 >> 2] | 0;
    c[e >> 2] = 0 - b;
    b = -1;
   }
   ha(0);
  }
  if ((h | 0) == (b | 0)) {
   b = 13;
   break;
  }
  if ((b | 0) < 0) {
   b = 15;
   break;
  }
  h = h - b | 0;
  e = c[j + 4 >> 2] | 0;
  if (b >>> 0 > e >>> 0) {
   g = c[l >> 2] | 0;
   c[o >> 2] = g;
   c[p >> 2] = g;
   b = b - e | 0;
   f = f + -1 | 0;
   g = j + 8 | 0;
   e = c[j + 12 >> 2] | 0;
  } else if ((f | 0) == 2) {
   c[o >> 2] = (c[o >> 2] | 0) + b;
   f = 2;
   g = j;
  } else g = j;
  c[g >> 2] = (c[g >> 2] | 0) + b;
  c[g + 4 >> 2] = e - b;
  j = g;
 }
 if ((b | 0) == 13) {
  n = c[l >> 2] | 0;
  c[a + 16 >> 2] = n + (c[a + 48 >> 2] | 0);
  a = n;
  c[o >> 2] = a;
  c[p >> 2] = a;
 } else if ((b | 0) == 15) {
  c[a + 16 >> 2] = 0;
  c[o >> 2] = 0;
  c[p >> 2] = 0;
  c[a >> 2] = c[a >> 2] | 32;
  if ((f | 0) == 2) d = 0; else d = d - (c[j + 4 >> 2] | 0) | 0;
 }
 i = q;
 return d | 0;
}

function kb(d, f, g, h) {
 d = d | 0;
 f = f | 0;
 g = g | 0;
 h = h | 0;
 var i = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 l = d + 5820 | 0;
 j = c[l >> 2] | 0;
 i = h & 65535;
 k = d + 5816 | 0;
 h = e[k >> 1] | 0 | i << j;
 b[k >> 1] = h;
 if ((j | 0) > 13) {
  n = d + 20 | 0;
  j = c[n >> 2] | 0;
  c[n >> 2] = j + 1;
  m = d + 8 | 0;
  a[(c[m >> 2] | 0) + j >> 0] = h;
  h = (e[k >> 1] | 0) >>> 8 & 255;
  j = c[n >> 2] | 0;
  c[n >> 2] = j + 1;
  a[(c[m >> 2] | 0) + j >> 0] = h;
  j = c[l >> 2] | 0;
  h = i >>> (16 - j | 0);
  b[k >> 1] = h;
  j = j + -13 | 0;
 } else j = j + 3 | 0;
 h = h & 255;
 c[l >> 2] = j;
 do if ((j | 0) > 8) {
  i = d + 20 | 0;
  m = c[i >> 2] | 0;
  c[i >> 2] = m + 1;
  n = d + 8 | 0;
  a[(c[n >> 2] | 0) + m >> 0] = h;
  m = (e[k >> 1] | 0) >>> 8 & 255;
  h = c[i >> 2] | 0;
  c[i >> 2] = h + 1;
  a[(c[n >> 2] | 0) + h >> 0] = m;
  h = n;
 } else {
  i = d + 20 | 0;
  if ((j | 0) > 0) {
   m = c[i >> 2] | 0;
   c[i >> 2] = m + 1;
   n = d + 8 | 0;
   a[(c[n >> 2] | 0) + m >> 0] = h;
   h = n;
   break;
  } else {
   h = d + 8 | 0;
   break;
  }
 } while (0);
 b[k >> 1] = 0;
 c[l >> 2] = 0;
 m = c[i >> 2] | 0;
 c[i >> 2] = m + 1;
 a[(c[h >> 2] | 0) + m >> 0] = g;
 m = c[i >> 2] | 0;
 c[i >> 2] = m + 1;
 a[(c[h >> 2] | 0) + m >> 0] = g >>> 8;
 m = g & 65535 ^ 65535;
 n = c[i >> 2] | 0;
 c[i >> 2] = n + 1;
 a[(c[h >> 2] | 0) + n >> 0] = m;
 n = c[i >> 2] | 0;
 c[i >> 2] = n + 1;
 a[(c[h >> 2] | 0) + n >> 0] = m >>> 8;
 if (!g) return;
 while (1) {
  g = g + -1 | 0;
  m = a[f >> 0] | 0;
  n = c[i >> 2] | 0;
  c[i >> 2] = n + 1;
  a[(c[h >> 2] | 0) + n >> 0] = m;
  if (!g) break; else f = f + 1 | 0;
 }
 return;
}

function $a(a, b) {
 a = a | 0;
 b = b | 0;
 var e = 0, f = 0, g = 0, h = 0;
 e = (d[a + 1 >> 0] | 0) << 8 | (d[a >> 0] | 0) | (d[a + 2 >> 0] | 0) << 16 | (d[a + 3 >> 0] | 0) << 24;
 f = (d[a + 5 >> 0] | 0) << 8 | (d[a + 4 >> 0] | 0) | (d[a + 6 >> 0] | 0) << 16 | (d[a + 7 >> 0] | 0) << 24;
 g = (f >>> 4 ^ e) & 252645135;
 e = g ^ e;
 f = g << 4 ^ f;
 g = (e << 18 ^ e) & -859045888;
 g = g ^ e ^ g >>> 18;
 e = (f << 18 ^ f) & -859045888;
 e = e ^ f ^ e >>> 18;
 f = (e >>> 1 ^ g) & 1431655765;
 g = f ^ g;
 e = f << 1 ^ e;
 f = (g >>> 8 ^ e) & 16711935;
 e = f ^ e;
 g = f << 8 ^ g;
 f = (e >>> 1 ^ g) & 1431655765;
 g = f ^ g;
 e = f << 1 ^ e;
 f = g;
 e = g >>> 4 & 251658240 | e & 65280 | e << 16 & 16711680 | e >>> 16 & 255;
 g = 0;
 while (1) {
  a = f & 268435455;
  if (!(32508 >>> g & 1)) {
   a = a >>> 1 | f << 27;
   e = e >>> 1 | e << 27;
  } else {
   a = a >>> 2 | f << 26;
   e = e >>> 2 | e << 26;
  }
  h = c[1280 + ((a >>> 6 & 3 | a >>> 7 & 60) << 2) >> 2] | c[1024 + ((a & 63) << 2) >> 2] | c[1536 + ((a >>> 13 & 15 | a >>> 14 & 48) << 2) >> 2] | c[1792 + ((a >>> 20 & 1 | a >>> 21 & 6 | a >>> 22 & 56) << 2) >> 2];
  f = c[2304 + ((e >>> 7 & 3 | e >>> 8 & 60) << 2) >> 2] | c[2048 + ((e & 63) << 2) >> 2] | c[2560 + ((e >>> 15 & 63) << 2) >> 2] | c[2816 + ((e >>> 21 & 15 | e >>> 22 & 48) << 2) >> 2];
  c[b + (g << 3) >> 2] = (f << 16 | h & 65535) << 2 | f >>> 14 & 3;
  c[b + (g << 3) + 4 >> 2] = (f & 67043328 | h >>> 16) << 6 | f >>> 26;
  g = g + 1 | 0;
  if ((g | 0) == 16) break; else {
   f = a;
   e = e & 268435455;
  }
 }
 return;
}

function jb(a) {
 a = a | 0;
 var d = 0;
 d = 0;
 do {
  b[a + 148 + (d << 2) >> 1] = 0;
  d = d + 1 | 0;
 } while ((d | 0) != 286);
 b[a + 2440 >> 1] = 0;
 b[a + 2444 >> 1] = 0;
 b[a + 2448 >> 1] = 0;
 b[a + 2452 >> 1] = 0;
 b[a + 2456 >> 1] = 0;
 b[a + 2460 >> 1] = 0;
 b[a + 2464 >> 1] = 0;
 b[a + 2468 >> 1] = 0;
 b[a + 2472 >> 1] = 0;
 b[a + 2476 >> 1] = 0;
 b[a + 2480 >> 1] = 0;
 b[a + 2484 >> 1] = 0;
 b[a + 2488 >> 1] = 0;
 b[a + 2492 >> 1] = 0;
 b[a + 2496 >> 1] = 0;
 b[a + 2500 >> 1] = 0;
 b[a + 2504 >> 1] = 0;
 b[a + 2508 >> 1] = 0;
 b[a + 2512 >> 1] = 0;
 b[a + 2516 >> 1] = 0;
 b[a + 2520 >> 1] = 0;
 b[a + 2524 >> 1] = 0;
 b[a + 2528 >> 1] = 0;
 b[a + 2532 >> 1] = 0;
 b[a + 2536 >> 1] = 0;
 b[a + 2540 >> 1] = 0;
 b[a + 2544 >> 1] = 0;
 b[a + 2548 >> 1] = 0;
 b[a + 2552 >> 1] = 0;
 b[a + 2556 >> 1] = 0;
 b[a + 2684 >> 1] = 0;
 b[a + 2688 >> 1] = 0;
 b[a + 2692 >> 1] = 0;
 b[a + 2696 >> 1] = 0;
 b[a + 2700 >> 1] = 0;
 b[a + 2704 >> 1] = 0;
 b[a + 2708 >> 1] = 0;
 b[a + 2712 >> 1] = 0;
 b[a + 2716 >> 1] = 0;
 b[a + 2720 >> 1] = 0;
 b[a + 2724 >> 1] = 0;
 b[a + 2728 >> 1] = 0;
 b[a + 2732 >> 1] = 0;
 b[a + 2736 >> 1] = 0;
 b[a + 2740 >> 1] = 0;
 b[a + 2744 >> 1] = 0;
 b[a + 2748 >> 1] = 0;
 b[a + 2752 >> 1] = 0;
 b[a + 2756 >> 1] = 0;
 b[a + 1172 >> 1] = 1;
 c[a + 5804 >> 2] = 0;
 c[a + 5800 >> 2] = 0;
 c[a + 5808 >> 2] = 0;
 c[a + 5792 >> 2] = 0;
 return;
}

function wb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, j = 0, k = 0, l = 0, m = 0, n = 0;
 n = i;
 i = i + 48 | 0;
 h = n + 16 | 0;
 g = n;
 f = n + 32 | 0;
 c[f >> 2] = d;
 j = f + 4 | 0;
 m = b + 48 | 0;
 k = c[m >> 2] | 0;
 c[j >> 2] = e - ((k | 0) != 0 & 1);
 l = b + 44 | 0;
 c[f + 8 >> 2] = c[l >> 2];
 c[f + 12 >> 2] = k;
 if (!(c[5123] | 0)) {
  c[h >> 2] = c[b + 60 >> 2];
  c[h + 4 >> 2] = f;
  c[h + 8 >> 2] = 2;
  f = wa(145, h | 0) | 0;
  if (f >>> 0 > 4294963200) {
   if (!(c[5123] | 0)) g = 20536; else g = c[(ec() | 0) + 64 >> 2] | 0;
   c[g >> 2] = 0 - f;
   f = -1;
   k = 12;
  } else k = 11;
 } else {
  na(2, b | 0);
  c[g >> 2] = c[b + 60 >> 2];
  c[g + 4 >> 2] = f;
  c[g + 8 >> 2] = 2;
  f = wa(145, g | 0) | 0;
  if (f >>> 0 > 4294963200) {
   if (!(c[5123] | 0)) g = 20536; else g = c[(ec() | 0) + 64 >> 2] | 0;
   c[g >> 2] = 0 - f;
   f = -1;
  }
  ha(0);
  k = 11;
 }
 if ((k | 0) == 11) if ((f | 0) < 1) k = 12; else {
  j = c[j >> 2] | 0;
  if (f >>> 0 > j >>> 0) {
   g = c[l >> 2] | 0;
   h = b + 4 | 0;
   c[h >> 2] = g;
   c[b + 8 >> 2] = g + (f - j);
   if (!(c[m >> 2] | 0)) f = e; else {
    c[h >> 2] = g + 1;
    a[d + (e + -1) >> 0] = a[g >> 0] | 0;
    f = e;
   }
  }
 }
 if ((k | 0) == 12) {
  c[b >> 2] = f & 48 ^ 16 | c[b >> 2];
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
 }
 i = n;
 return f | 0;
}

function Va(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0;
 g = d + 16 | 0;
 b = c[g >> 2] | 0;
 do if (!b) {
  b = d + 74 | 0;
  i = a[b >> 0] | 0;
  a[b >> 0] = i + 255 | i;
  b = c[d >> 2] | 0;
  if (!(b & 8)) {
   c[d + 8 >> 2] = 0;
   c[d + 4 >> 2] = 0;
   h = c[d + 44 >> 2] | 0;
   c[d + 28 >> 2] = h;
   i = d + 20 | 0;
   c[i >> 2] = h;
   b = h + (c[d + 48 >> 2] | 0) | 0;
   c[g >> 2] = b;
   g = b;
   break;
  }
  c[d >> 2] = b | 32;
  f = 0;
  return f | 0;
 } else {
  h = d + 20 | 0;
  g = b;
  i = h;
  h = c[h >> 2] | 0;
 } while (0);
 b = h;
 if ((g - h | 0) >>> 0 < f >>> 0) {
  f = Ba[c[d + 36 >> 2] & 7](d, e, f) | 0;
  return f | 0;
 }
 a : do if ((a[d + 75 >> 0] | 0) > -1) {
  g = f;
  while (1) {
   if (!g) {
    h = f;
    g = 0;
    break a;
   }
   h = g + -1 | 0;
   if ((a[e + h >> 0] | 0) == 10) break; else g = h;
  }
  if ((Ba[c[d + 36 >> 2] & 7](d, e, g) | 0) >>> 0 < g >>> 0) {
   f = g;
   return f | 0;
  } else {
   h = f - g | 0;
   e = e + g | 0;
   b = c[i >> 2] | 0;
   break;
  }
 } else {
  h = f;
  g = 0;
 } while (0);
 bc(b | 0, e | 0, h | 0) | 0;
 c[i >> 2] = (c[i >> 2] | 0) + h;
 f = g + h | 0;
 return f | 0;
}

function Ua(b, d, e, f) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m = 0, n = 0, o = 0, p = 0, q = 0;
 p = d + 74 | 0;
 n = a[p >> 0] | 0;
 a[p >> 0] = n + 255 | n;
 n = d + 8 | 0;
 o = d + 4 | 0;
 g = c[o >> 2] | 0;
 b = (c[n >> 2] | 0) - g | 0;
 if ((b | 0) > 0) {
  m = b >>> 0 < f >>> 0 ? b : f;
  bc(e | 0, g | 0, m | 0) | 0;
  c[o >> 2] = g + m;
  b = f - m | 0;
  e = e + m | 0;
 } else b = f;
 if (!b) {
  q = f;
  return q | 0;
 }
 h = d + 32 | 0;
 i = d + 20 | 0;
 j = d + 44 | 0;
 k = d + 36 | 0;
 l = d + 16 | 0;
 m = d + 28 | 0;
 while (1) {
  g = a[p >> 0] | 0;
  a[p >> 0] = g + 255 | g;
  if ((c[i >> 2] | 0) >>> 0 > (c[j >> 2] | 0) >>> 0) Ba[c[k >> 2] & 7](d, 0, 0) | 0;
  c[l >> 2] = 0;
  c[m >> 2] = 0;
  c[i >> 2] = 0;
  g = c[d >> 2] | 0;
  if (g & 20 | 0) {
   q = 8;
   break;
  }
  g = c[j >> 2] | 0;
  c[n >> 2] = g;
  c[o >> 2] = g;
  g = Ba[c[h >> 2] & 7](d, e, b) | 0;
  if ((g + 1 | 0) >>> 0 < 2) break;
  b = b - g | 0;
  if (!b) {
   q = 13;
   break;
  } else e = e + g | 0;
 }
 if ((q | 0) == 13) return f | 0;
 if ((q | 0) == 8) if (g & 4 | 0) c[d >> 2] = g | 32;
 q = f - b | 0;
 return q | 0;
}

function Db(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 h = d & 255;
 f = (e | 0) != 0;
 a : do if (f & (b & 3 | 0) != 0) {
  g = d & 255;
  while (1) {
   if ((a[b >> 0] | 0) == g << 24 >> 24) break a;
   b = b + 1 | 0;
   e = e + -1 | 0;
   f = (e | 0) != 0;
   if (!(f & (b & 3 | 0) != 0)) {
    i = 5;
    break;
   }
  }
 } else i = 5; while (0);
 b : do if ((i | 0) == 5) if (f) {
  g = d & 255;
  if ((a[b >> 0] | 0) != g << 24 >> 24) {
   f = S(h, 16843009) | 0;
   c : do if (e >>> 0 > 3) while (1) {
    h = c[b >> 2] ^ f;
    if ((h & -2139062144 ^ -2139062144) & h + -16843009 | 0) break;
    b = b + 4 | 0;
    e = e + -4 | 0;
    if (e >>> 0 <= 3) {
     i = 11;
     break c;
    }
   } else i = 11; while (0);
   if ((i | 0) == 11) if (!e) {
    e = 0;
    break;
   }
   while (1) {
    if ((a[b >> 0] | 0) == g << 24 >> 24) break b;
    b = b + 1 | 0;
    e = e + -1 | 0;
    if (!e) {
     e = 0;
     break;
    }
   }
  }
 } else e = 0; while (0);
 return (e | 0 ? b : 0) | 0;
}

function Ab(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = e + 16 | 0;
 g = c[f >> 2] | 0;
 if (!g) if (!(Hb(e) | 0)) {
  f = c[f >> 2] | 0;
  h = 5;
 } else f = 0; else {
  f = g;
  h = 5;
 }
 a : do if ((h | 0) == 5) {
  i = e + 20 | 0;
  h = c[i >> 2] | 0;
  g = h;
  if ((f - h | 0) >>> 0 < d >>> 0) {
   f = Ba[c[e + 36 >> 2] & 7](e, b, d) | 0;
   break;
  }
  b : do if ((a[e + 75 >> 0] | 0) > -1) {
   f = d;
   while (1) {
    if (!f) {
     h = d;
     f = 0;
     break b;
    }
    h = f + -1 | 0;
    if ((a[b + h >> 0] | 0) == 10) break; else f = h;
   }
   if ((Ba[c[e + 36 >> 2] & 7](e, b, f) | 0) >>> 0 < f >>> 0) break a;
   h = d - f | 0;
   b = b + f | 0;
   g = c[i >> 2] | 0;
  } else {
   h = d;
   f = 0;
  } while (0);
  bc(g | 0, b | 0, h | 0) | 0;
  c[i >> 2] = (c[i >> 2] | 0) + h;
  f = f + h | 0;
 } while (0);
 return f | 0;
}

function Ob(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0, j = 0, k = 0;
 k = i;
 i = i + 240 | 0;
 f = k + 136 | 0;
 g = k + 96 | 0;
 h = k;
 j = k + 152 | 0;
 e = k + 80 | 0;
 c[e >> 2] = d;
 b = g;
 d = b + 40 | 0;
 do {
  c[b >> 2] = 0;
  b = b + 4 | 0;
 } while ((b | 0) < (d | 0));
 c[f >> 2] = c[e >> 2];
 if ((zb(0, f, h, g) | 0) >= 0) {
  b = c[3538] | 0;
  d = b & 32;
  if ((a[14226] | 0) < 1) c[3538] = b & -33;
  if (!(c[3550] | 0)) {
   b = c[3549] | 0;
   c[3549] = j;
   c[3545] = j;
   c[3543] = j;
   c[3550] = 80;
   c[3542] = j + 80;
   zb(14152, f, h, g) | 0;
   if (b | 0) {
    Ba[c[14188 >> 2] & 7](14152, 0, 0) | 0;
    c[3549] = b;
    c[3550] = 0;
    c[3542] = 0;
    c[3545] = 0;
    c[3543] = 0;
   }
  } else zb(14152, f, h, g) | 0;
  c[3538] = c[3538] | d;
 }
 i = k;
 return;
}

function Jb(b, d) {
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0;
 f = d & 255;
 a : do if (!f) b = b + (Ib(b) | 0) | 0; else {
  if (b & 3) {
   e = d & 255;
   do {
    g = a[b >> 0] | 0;
    if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break a;
    b = b + 1 | 0;
   } while ((b & 3 | 0) != 0);
  }
  f = S(f, 16843009) | 0;
  e = c[b >> 2] | 0;
  b : do if (!((e & -2139062144 ^ -2139062144) & e + -16843009)) do {
   g = e ^ f;
   if ((g & -2139062144 ^ -2139062144) & g + -16843009 | 0) break b;
   b = b + 4 | 0;
   e = c[b >> 2] | 0;
  } while (!((e & -2139062144 ^ -2139062144) & e + -16843009 | 0)); while (0);
  e = d & 255;
  while (1) {
   g = a[b >> 0] | 0;
   if (g << 24 >> 24 == 0 ? 1 : g << 24 >> 24 == e << 24 >> 24) break; else b = b + 1 | 0;
  }
 } while (0);
 return b | 0;
}

function Pb(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g;
 d = Ib(b) | 0;
 b = Ab(b, d, 14152) | 0;
 if ((b | 0) == (d | 0)) e = 3; else if ((((b >>> 0) / (d >>> 0) | 0) + -1 | 0) >= 0) e = 3;
 do if ((e | 0) == 3) {
  if ((a[14227] | 0) == 10) b = c[3542] | 0; else {
   d = c[3543] | 0;
   b = c[3542] | 0;
   if (d >>> 0 < b >>> 0) {
    c[3543] = d + 1;
    a[d >> 0] = 10;
    break;
   }
  }
  a[f >> 0] = 10;
  if (!b) {
   if (!(Hb(14152) | 0)) {
    b = c[3542] | 0;
    e = 10;
   }
  } else e = 10;
  do if ((e | 0) == 10) {
   d = c[3543] | 0;
   if (d >>> 0 >= b >>> 0 | (a[14227] | 0) == 10) {
    Ba[c[14188 >> 2] & 7](14152, f, 1) | 0;
    break;
   } else {
    c[3543] = d + 1;
    a[d >> 0] = 10;
    break;
   }
  } while (0);
 } while (0);
 i = g;
 return;
}

function Lb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0;
 f = (c[a >> 2] & 1 | 0) != 0;
 if (f) e = 9; else {
  la(20520);
  d = c[a + 52 >> 2] | 0;
  b = a + 56 | 0;
  if (d | 0) c[d + 56 >> 2] = c[b >> 2];
  b = c[b >> 2] | 0;
  if (b | 0) c[b + 52 >> 2] = d;
  if ((c[5129] | 0) == (a | 0)) c[5129] = b;
  ja(20520);
  if (!a) {
   if (!(c[3566] | 0)) b = 0; else b = Mb(c[3566] | 0) | 0;
   la(20520);
   d = c[5129] | 0;
   if (d) do {
    if ((c[d + 20 >> 2] | 0) >>> 0 > (c[d + 28 >> 2] | 0) >>> 0) b = Nb(d) | 0 | b;
    d = c[d + 56 >> 2] | 0;
   } while ((d | 0) != 0);
   ja(20520);
  } else e = 9;
 }
 if ((e | 0) == 9) b = Nb(a) | 0;
 b = Ea[c[a + 12 >> 2] & 1](a) | 0 | b;
 d = c[a + 92 >> 2] | 0;
 if (d | 0) Rb(d);
 if (!f) Rb(a);
 return b | 0;
}

function Gb(b, d) {
 b = b | 0;
 d = d | 0;
 do if (!b) b = 1; else {
  if (d >>> 0 < 128) {
   a[b >> 0] = d;
   b = 1;
   break;
  }
  if (d >>> 0 < 2048) {
   a[b >> 0] = d >>> 6 | 192;
   a[b + 1 >> 0] = d & 63 | 128;
   b = 2;
   break;
  }
  if (d >>> 0 < 55296 | (d & -8192 | 0) == 57344) {
   a[b >> 0] = d >>> 12 | 224;
   a[b + 1 >> 0] = d >>> 6 & 63 | 128;
   a[b + 2 >> 0] = d & 63 | 128;
   b = 3;
   break;
  }
  if ((d + -65536 | 0) >>> 0 < 1048576) {
   a[b >> 0] = d >>> 18 | 240;
   a[b + 1 >> 0] = d >>> 12 & 63 | 128;
   a[b + 2 >> 0] = d >>> 6 & 63 | 128;
   a[b + 3 >> 0] = d & 63 | 128;
   b = 4;
   break;
  }
  if (!(c[5123] | 0)) b = 20536; else b = c[(ec() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 84;
  b = -1;
 } while (0);
 return b | 0;
}

function _a(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 if (f >>> 0 >= 3) {
  f = -1;
  return f | 0;
 }
 if ((f | 0) == 1) d = d - (c[b + 8 >> 2] | 0) + (c[b + 4 >> 2] | 0) | 0;
 a = b + 20 | 0;
 e = b + 28 | 0;
 if ((c[a >> 2] | 0) >>> 0 > (c[e >> 2] | 0) >>> 0) {
  Ba[c[b + 36 >> 2] & 7](b, 0, 0) | 0;
  if (!(c[a >> 2] | 0)) {
   f = -1;
   return f | 0;
  }
 }
 c[b + 16 >> 2] = 0;
 c[e >> 2] = 0;
 c[a >> 2] = 0;
 if ((Ba[c[b + 40 >> 2] & 7](b, d, f) | 0) < 0) {
  f = -1;
  return f | 0;
 }
 c[b + 8 >> 2] = 0;
 c[b + 4 >> 2] = 0;
 c[b >> 2] = c[b >> 2] & -17;
 f = 0;
 return f | 0;
}

function Eb(a, b, d, e, f) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 var g = 0, h = 0;
 h = i;
 i = i + 256 | 0;
 g = h;
 do if ((d | 0) > (e | 0) & (f & 73728 | 0) == 0) {
  d = d - e | 0;
  Xb(g | 0, b | 0, (d >>> 0 > 256 ? 256 : d) | 0) | 0;
  e = c[a >> 2] | 0;
  f = (e & 32 | 0) == 0;
  if (d >>> 0 > 255) {
   b = d;
   do {
    if (f) {
     Ab(g, 256, a) | 0;
     e = c[a >> 2] | 0;
    }
    b = b + -256 | 0;
    f = (e & 32 | 0) == 0;
   } while (b >>> 0 > 255);
   if (f) d = d & 255; else break;
  } else if (!f) break;
  Ab(g, d, a) | 0;
 } while (0);
 i = h;
 return;
}

function Nb(a) {
 a = a | 0;
 var b = 0, d = 0, e = 0, f = 0, g = 0, h = 0;
 g = a + 20 | 0;
 h = a + 28 | 0;
 if ((c[g >> 2] | 0) >>> 0 > (c[h >> 2] | 0) >>> 0) {
  Ba[c[a + 36 >> 2] & 7](a, 0, 0) | 0;
  if (!(c[g >> 2] | 0)) b = -1; else d = 3;
 } else d = 3;
 if ((d | 0) == 3) {
  b = a + 4 | 0;
  d = c[b >> 2] | 0;
  e = a + 8 | 0;
  f = c[e >> 2] | 0;
  if (d >>> 0 < f >>> 0) Ba[c[a + 40 >> 2] & 7](a, d - f | 0, 1) | 0;
  c[a + 16 >> 2] = 0;
  c[h >> 2] = 0;
  c[g >> 2] = 0;
  c[e >> 2] = 0;
  c[b >> 2] = 0;
  b = 0;
 }
 return b | 0;
}

function tb(a, b, d) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 var e = 0, f = 0, g = 0, h = 0;
 g = i;
 i = i + 32 | 0;
 h = g;
 e = g + 20 | 0;
 c[h >> 2] = c[a + 60 >> 2];
 c[h + 4 >> 2] = 0;
 c[h + 8 >> 2] = b;
 c[h + 12 >> 2] = e;
 c[h + 16 >> 2] = d;
 b = ta(140, h | 0) | 0;
 if (b >>> 0 > 4294963200) {
  if (!(c[5123] | 0)) a = 20536; else a = c[(ec() | 0) + 64 >> 2] | 0;
  c[a >> 2] = 0 - b;
  f = 7;
 } else if ((b | 0) < 0) f = 7; else a = c[e >> 2] | 0;
 if ((f | 0) == 7) {
  c[e >> 2] = -1;
  a = -1;
 }
 i = g;
 return a | 0;
}

function bc(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0;
 if ((e | 0) >= 4096) return ra(b | 0, d | 0, e | 0) | 0;
 f = b | 0;
 if ((b & 3) == (d & 3)) {
  while (b & 3) {
   if (!e) return f | 0;
   a[b >> 0] = a[d >> 0] | 0;
   b = b + 1 | 0;
   d = d + 1 | 0;
   e = e - 1 | 0;
  }
  while ((e | 0) >= 4) {
   c[b >> 2] = c[d >> 2];
   b = b + 4 | 0;
   d = d + 4 | 0;
   e = e - 4 | 0;
  }
 }
 while ((e | 0) > 0) {
  a[b >> 0] = a[d >> 0] | 0;
  b = b + 1 | 0;
  d = d + 1 | 0;
  e = e - 1 | 0;
 }
 return f | 0;
}

function Cb(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if (c >>> 0 > 0 | (c | 0) == 0 & b >>> 0 > 4294967295) {
  while (1) {
   e = dc(b | 0, c | 0, 10, 0) | 0;
   d = d + -1 | 0;
   a[d >> 0] = e | 48;
   e = b;
   b = $b(b | 0, c | 0, 10, 0) | 0;
   if (!(c >>> 0 > 9 | (c | 0) == 9 & e >>> 0 > 4294967295)) break; else c = D;
  }
  c = b;
 } else c = b;
 if (c) while (1) {
  d = d + -1 | 0;
  a[d >> 0] = (c >>> 0) % 10 | 0 | 48;
  if (c >>> 0 < 10) break; else c = (c >>> 0) / 10 | 0;
 }
 return d | 0;
}

function Ib(b) {
 b = b | 0;
 var d = 0, e = 0, f = 0;
 f = b;
 a : do if (!(f & 3)) e = 4; else {
  d = f;
  while (1) {
   if (!(a[b >> 0] | 0)) {
    b = d;
    break a;
   }
   b = b + 1 | 0;
   d = b;
   if (!(d & 3)) {
    e = 4;
    break;
   }
  }
 } while (0);
 if ((e | 0) == 4) {
  while (1) {
   d = c[b >> 2] | 0;
   if (!((d & -2139062144 ^ -2139062144) & d + -16843009)) b = b + 4 | 0; else break;
  }
  if ((d & 255) << 24 >> 24) do b = b + 1 | 0; while ((a[b >> 0] | 0) != 0);
 }
 return b - f | 0;
}

function Fb(a, b) {
 a = +a;
 b = b | 0;
 var d = 0, e = 0, f = 0;
 h[l >> 3] = a;
 d = c[l >> 2] | 0;
 e = c[l + 4 >> 2] | 0;
 f = Yb(d | 0, e | 0, 52) | 0;
 switch (f & 2047) {
 case 0:
  {
   if (a != 0.0) {
    a = +Fb(a * 18446744073709551616.0, b);
    d = (c[b >> 2] | 0) + -64 | 0;
   } else d = 0;
   c[b >> 2] = d;
   break;
  }
 case 2047:
  break;
 default:
  {
   c[b >> 2] = (f & 2047) + -1022;
   c[l >> 2] = d;
   c[l + 4 >> 2] = e & -2146435073 | 1071644672;
   a = +h[l >> 3];
  }
 }
 return +a;
}

function Xb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0, h = 0, i = 0;
 f = b + e | 0;
 if ((e | 0) >= 20) {
  d = d & 255;
  h = b & 3;
  i = d | d << 8 | d << 16 | d << 24;
  g = f & ~3;
  if (h) {
   h = b + 4 - h | 0;
   while ((b | 0) < (h | 0)) {
    a[b >> 0] = d;
    b = b + 1 | 0;
   }
  }
  while ((b | 0) < (g | 0)) {
   c[b >> 2] = i;
   b = b + 4 | 0;
  }
 }
 while ((b | 0) < (f | 0)) {
  a[b >> 0] = d;
  b = b + 1 | 0;
 }
 return b - e | 0;
}

function Za(a, b) {
 a = a | 0;
 b = b | 0;
 if (!(c[b >> 2] & 128)) a = 1; else a = (c[b + 20 >> 2] | 0) >>> 0 > (c[b + 28 >> 2] | 0) >>> 0 ? 2 : 1;
 a = Ba[c[b + 40 >> 2] & 7](b, 0, a) | 0;
 if ((a | 0) < 0) {
  b = a;
  a = (b | 0) < 0;
  a = a << 31 >> 31;
  D = a;
  return b | 0;
 }
 b = a - (c[b + 8 >> 2] | 0) + (c[b + 4 >> 2] | 0) + (c[b + 20 >> 2] | 0) - (c[b + 28 >> 2] | 0) | 0;
 a = (b | 0) < 0;
 a = a << 31 >> 31;
 D = a;
 return b | 0;
}

function Hb(b) {
 b = b | 0;
 var d = 0, e = 0;
 d = b + 74 | 0;
 e = a[d >> 0] | 0;
 a[d >> 0] = e + 255 | e;
 d = c[b >> 2] | 0;
 if (!(d & 8)) {
  c[b + 8 >> 2] = 0;
  c[b + 4 >> 2] = 0;
  e = c[b + 44 >> 2] | 0;
  c[b + 28 >> 2] = e;
  c[b + 20 >> 2] = e;
  c[b + 16 >> 2] = e + (c[b + 48 >> 2] | 0);
  b = 0;
 } else {
  c[b >> 2] = d | 32;
  b = -1;
 }
 return b | 0;
}

function yb(b, d, e) {
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 80 | 0;
 f = g;
 c[b + 36 >> 2] = 6;
 if (!(c[b >> 2] & 64)) {
  c[f >> 2] = c[b + 60 >> 2];
  c[f + 4 >> 2] = 21505;
  c[f + 8 >> 2] = g + 12;
  if (sa(54, f | 0) | 0) a[b + 75 >> 0] = -1;
 }
 f = sb(b, d, e) | 0;
 i = g;
 return f | 0;
}

function Mb(a) {
 a = a | 0;
 var b = 0;
 if (a | 0) return Nb(a) | 0;
 if (!(c[3566] | 0)) a = 0; else a = Mb(c[3566] | 0) | 0;
 la(20520);
 b = c[5129] | 0;
 if (b) do {
  if ((c[b + 20 >> 2] | 0) >>> 0 > (c[b + 28 >> 2] | 0) >>> 0) a = Nb(b) | 0 | a;
  b = c[b + 56 >> 2] | 0;
 } while ((b | 0) != 0);
 ja(20520);
 return a | 0;
}

function cc(b, c, d) {
 b = b | 0;
 c = c | 0;
 d = d | 0;
 var e = 0;
 if ((c | 0) < (b | 0) & (b | 0) < (c + d | 0)) {
  e = b;
  c = c + d | 0;
  b = b + d | 0;
  while ((d | 0) > 0) {
   b = b - 1 | 0;
   c = c - 1 | 0;
   d = d - 1 | 0;
   a[b >> 0] = a[c >> 0] | 0;
  }
  b = e;
 } else bc(b, c, d) | 0;
 return b | 0;
}

function ac(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = a + 15 & -16 | 0;
 b = c[k >> 2] | 0;
 a = b + d | 0;
 if ((d | 0) > 0 & (a | 0) < (b | 0) | (a | 0) < 0) {
  $() | 0;
  ka(12);
  return -1;
 }
 c[k >> 2] = a;
 if ((a | 0) > (_() | 0)) if (!(Z() | 0)) {
  ka(12);
  c[k >> 2] = b;
  return -1;
 }
 return b | 0;
}

function rb(a) {
 a = a | 0;
 var b = 0, d = 0;
 d = i;
 i = i + 16 | 0;
 b = d;
 c[b >> 2] = c[a + 60 >> 2];
 a = oa(6, b | 0) | 0;
 if (a >>> 0 > 4294963200) {
  if (!(c[5123] | 0)) b = 20536; else b = c[(ec() | 0) + 64 >> 2] | 0;
  c[b >> 2] = 0 - a;
  a = -1;
 }
 i = d;
 return a | 0;
}

function Ya(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c & 3 | 0) == 1) a = 17213; else if (!(c & 4)) a = (c & 8 | 0) == 0 ? 0 : 17210; else a = 17216;
 if (!((b | 0) != 0 & (a | 0) != 0)) {
  b = 0;
  return b | 0;
 }
 b = Kb(b, a) | 0;
 return b | 0;
}

function dc(a, b, d, e) {
 a = a | 0;
 b = b | 0;
 d = d | 0;
 e = e | 0;
 var f = 0, g = 0;
 g = i;
 i = i + 16 | 0;
 f = g | 0;
 _b(a, b, d, e, f) | 0;
 i = g;
 return (D = c[f + 4 >> 2] | 0, c[f >> 2] | 0) | 0;
}

function Zb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b << c | (a & (1 << c) - 1 << 32 - c) >>> 32 - c;
  return a << c;
 }
 D = a << c - 32;
 return 0;
}

function Yb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 if ((c | 0) < 32) {
  D = b >>> c;
  return a >>> c | (b & (1 << c) - 1) << 32 - c;
 }
 D = 0;
 return b >>> c - 32 | 0;
}

function Ub() {}
function Vb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 d = b - d - (c >>> 0 > a >>> 0 | 0) >>> 0;
 return (D = d, a - c >>> 0 | 0) | 0;
}

function lc(a, b, c, d, e, f) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 f = f | 0;
 return Ha[a & 1](b | 0, c | 0, d | 0, e | 0, f | 0) | 0;
}

function Wb(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 c = a + c >>> 0;
 return (D = b + d + (c >>> 0 < a >>> 0 | 0) >>> 0, c | 0) | 0;
}

function jc(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 return Fa[a & 3](b | 0, c | 0, d | 0, e | 0) | 0;
}

function fc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return Ba[a & 7](b | 0, c | 0, d | 0) | 0;
}

function ub() {
 var a = 0;
 if (!(c[5123] | 0)) a = 20536; else a = c[(ec() | 0) + 64 >> 2] | 0;
 return a | 0;
}

function sc(a, b, c, d, e) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 e = e | 0;
 X(6);
 return 0;
}

function $b(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 return _b(a, b, c, d, 0) | 0;
}
function Ia(a) {
 a = a | 0;
 var b = 0;
 b = i;
 i = i + a | 0;
 i = i + 15 & -16;
 return b | 0;
}

function kc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Ga[a & 7](b | 0, c | 0) | 0;
}

function qc(a, b, c, d) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 d = d | 0;
 X(4);
 return 0;
}

function pb(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 return Qb(S(c, b) | 0) | 0;
}

function hc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 Da[a & 1](b | 0, c | 0);
}

function Xa(a, b) {
 a = a | 0;
 b = b | 0;
 return (c[b >> 2] | 0) >>> 5 & 1 | 0;
}

function mc(a, b, c) {
 a = a | 0;
 b = b | 0;
 c = c | 0;
 X(0);
 return 0;
}

function Ma(a, b) {
 a = a | 0;
 b = b | 0;
 if (!o) {
  o = a;
  p = b;
 }
}

function ic(a, b) {
 a = a | 0;
 b = b | 0;
 return Ea[a & 1](b | 0) | 0;
}

function gc(a, b) {
 a = a | 0;
 b = b | 0;
 Ca[a & 3](b | 0);
}

function Wa(a, b) {
 a = a | 0;
 b = b | 0;
 return Lb(b) | 0;
}

function rc(a, b) {
 a = a | 0;
 b = b | 0;
 X(5);
 return 0;
}

function qb(a, b) {
 a = a | 0;
 b = b | 0;
 Rb(b);
 return;
}

function La(a, b) {
 a = a | 0;
 b = b | 0;
 i = a;
 j = b;
}

function oc(a, b) {
 a = a | 0;
 b = b | 0;
 X(2);
}

function pc(a) {
 a = a | 0;
 X(3);
 return 0;
}

function xb(a) {
 a = a | 0;
 return;
}

function vb(a) {
 a = a | 0;
 return;
}

function Na(a) {
 a = a | 0;
 D = a;
}

function Ka(a) {
 a = a | 0;
 i = a;
}

function nc(a) {
 a = a | 0;
 X(1);
}

function Oa() {
 return D | 0;
}

function Ja() {
 return i | 0;
}

function ec() {
 return 0;
}

// EMSCRIPTEN_END_FUNCS

 var Ba = [ mc, wb, tb, yb, Ya, pb, sb, mc ];
 var Ca = [ nc, vb, xb, nc ];
 var Da = [ oc, qb ];
 var Ea = [ pc, rb ];
 var Fa = [ qc, Ua, Va, qc ];
 var Ga = [ rc, db, eb, fb, Za, Wa, Xa, rc ];
 var Ha = [ sc, _a ];
 return {
  _sbrk: ac,
  _i64Subtract: Vb,
  _free: Rb,
  _main: Ra,
  _i64Add: Wb,
  _memmove: cc,
  _pthread_self: ec,
  _memset: Xb,
  ___udivdi3: $b,
  _malloc: Qb,
  _memcpy: bc,
  _bitshift64Lshr: Yb,
  _bitshift64Shl: Zb,
  ___uremdi3: dc,
  ___errno_location: ub,
  ___udivmoddi4: _b,
  runPostSets: Ub,
  stackAlloc: Ia,
  stackSave: Ja,
  stackRestore: Ka,
  establishStackSpace: La,
  setThrew: Ma,
  setTempRet0: Na,
  getTempRet0: Oa,
  dynCall_iiii: fc,
  dynCall_vi: gc,
  dynCall_vii: hc,
  dynCall_ii: ic,
  dynCall_iiiii: jc,
  dynCall_iii: kc,
  dynCall_iiiiii: lc
 };
})


;