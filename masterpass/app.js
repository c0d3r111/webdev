//base

const app     = create.div;
const body    = create.raw(document.body);
const select  = name => {
  return create.raw(document.getElementById(uids[name] || name));
};
const store   = {
  size: 16,
  type: 'regular'
};
const style   = {
  get button     () {
    return {
      ...this.cursor,
      ...this.radius(1,1,1,1,2),
      ...this.font(16, 500),
      ...this.text('white', 0, 'c'),
      border           : 'none',
      line_height      : '18px',
      outline          : 'none!important',
      padding          : '0.85em 1.85em',
    };
  },
  get cursor     () {
    return {
      cursor         : 'pointer',
      user_select    : 'none',
    };
  },
  get dims       () {
      return {
        header     : 85,
        search_bar : 90,
        maxwidth   : 1160,
        radius     : {
          round: '5em',
          box  : '5px',
        }
      }
    },
  get display    () {
    return {
      primary       : {
        background: this.color().primary,
        color: 'white',
      },
      primary_offset: {
        color: this.color().primary,
        background: 'white',
      },
    };
  },
  get flex       () {
    let c = '.fx';
    let s = {};
    let o = [
      ['b',  'baseline'],
      ['c',  'center'],
      ['e',  'flex-end'],
      ['n',  'normal'],
      ['s',  'flex-start'],
      ['sb', 'space-between'],
      ['sa', 'space-around'],
    ];
    
    for (let p of ['align_items', 'justify_content']) {
      for (let v of o) {
        s[c + '-' + p[0] + v[0]] = {[p]: v[1]};
      }
    }
    
    s[c]          = {display: 'flex'};
    s[c + '-dr']  = {flex_direction: 'row'};
    s[c + '-dc']  = {flex_direction: 'column'};
    s[c + '-drr'] = {flex_direction: 'row-reverse'};
    
    return s;
  },
  get full       () {
    return {
      box    : {
        width  : '100%',
        height : '100%',
      },
      screen : {
        width  : '100vw',
        height : '100vh',
      },
    };
  },
  get radius     () {
    return {
      round: '5em',
      box  : '5px',
    };
  },
  get scrollbar  () {
    return {
      display: 'none',
      outline: 'none',
      border : 'none',
    };
  },
  get title      () {
    return {
      ...this.font('12px', 400),
      ...this.border(1,1,1,1,1),
      text_transform : 'uppercase',
      margin         : '3em 0',
      letter_spacing : '2px',
      padding        : '10px 20px',
      background     : this.color().light,
      display        : 'block',
    }
  },
  
  background (link)              {
    return {
      background_image    : 'url(' + link + ')',
      background_position : 'right',
      background_size     : 'cover',
      background_repeat   : 'no-repeat',
    };
  },
  border     (t, r, b, l, d)     {
    const data = '2px solid ' + this.color().border;
    
    return {
      border_top    : t ? data : 'none',
      border_right  : r ? data : 'none',
      border_bottom : b ? data : 'none',
      border_left   : l ? data : 'none',
      border_radius : d ? d > 1 ? this.dims.radius.round : this.dims.radius.box : 0,
    };
  },
  color      (alpha)             {
    return {
      muted          : 'rgba(220,220,220, '  + (alpha || 1) + ')',
      primary        : 'rgba(0, 78, 137, '   + (alpha || 1) + ')',
      primary_dark   : 'rgba(17,197,239, '   + (alpha || 1) + ')',
      secondary      : 'rgba(237, 174, 73, ' + (alpha || 1) + ')',
      text           : 'rgba(54,63,65, '     + (alpha || 1) + ')',
      light          : 'rgba(248,248,248,'   + (alpha || 1) + ')',
      green          : 'rgba(37, 161, 142,'  + (alpha || 1) + ')',
      red            : 'rgba(220,22,2,'      + (alpha || 1) + ')',
      border         : 'rgba(235,235,235,'   + (alpha || 1) + ')',
    };
  },
  flex       (a, d, j, w)        {
    return {
      display         : 'flex',
      align_items     : (
        a === 'b' && 'baseline'   ||
        a === 'n' && 'normal'     ||
        a === 'c' && 'center'     ||
        a === 's' && 'flex-start' ||
        a === 'e' && 'flex-end'   || 'center'
      ),
      justify_content : (
        j === 'b'  && 'baseline'      ||
        j === 'n'  && 'normal'        ||
        j === 'c'  && 'center'        ||
        j === 's'  && 'flex-start'    ||
        j === 'e'  && 'flex-end'      ||
        j === 'se' && 'space-evenly'  ||
        j === 'sb' && 'space-between' || 'center'
      ),
      flex_direction  : (
        d === 'c'  && 'column' ||
        d === 'rr' && 'row-reverse' || 'row'
      ),
      flex_wrap       : w && 'wrap' || 'initial',
    };
  },
  font       (z, w, f, i)        {
    return {
      font_family : f || "'Roboto', sans-serif",
      font_weight : w || 400,
      font_size   : typeof z === 'number' ? (z + 'px') : (z || '16px'),
      font_style  : i ? 'italic' : 'normal',
    };
  },
  gradient   (s, e, p)           {
    return 'linear-gradient(90deg, ' + s + ' ' + (p || 15) + '%, ' + e + ' 100%)'
  },
  height     (m, x)              {
    return {
      height: '100vh',
      min_height: m + 'px',
      max_height: x + 'px',
    }
  },
  level      (n)                 {
    return {
      z_index: Number.MAX_SAFE_INTEGER - (n || 0),
    };
  },
  padding    (t, b)              {
    return {
      padding_top    : typeof t === 'number' ? (t || 1) + 'em' : (t || '1em'),
      padding_bottom : typeof t === 'number' ? (b || t || 1) + 'em' : (b || t || '1em')
    };
  },
  position   (d, t, r, b, l)     {
    let s = {};
    
    s.position = d === 'f' ? 'fixed'    :
                 d === 'a' ? 'absolute' : 'relative';
    
    for (let p of [[b, 'bottom'], [l, 'left'], [r, 'right'], [t, 'top']]) {
      s[p[1]] = !p[0] && p[0] !== 0
        ? 'unset'
        : typeof p[0] === 'string'
          ? p[0]
          : p[0] + 'px';
    }
    
    return s;
  },
  psuedolay  (s, l)              {
    return {
      ...this.level(3),
      content               : '""',
      position              : 'fixed',
      top                   : 0,
      [l ? 'left' : 'right']: 0,
      width                 : 'calc(100vw - ' + s + 'px)',
      height                : '100vh',
      background            : 'rgba(255,255,255,0.75)',
    }
  },
  radius     (tl, tr, bl, br, s) {
    const radius = typeof s === 'string'
      ? s
      : s === 1
        ? this.dims.radius.box
        : s === 2
         ? this.dims.radius.round
         : 0;
    
    return {
      border_top_right_radius    : tr ? radius : 0,
      border_top_left_radius     : tl ? radius : 0,
      border_bottom_right_radius : br ? radius : 0,
      border_bottom_left_radius  : bl ? radius : 0,
    };
  },
  screen     (size)              {
    return '@media screen and (max-width: ' + size + 'px)';
  },
  screenmin  (size)              {
    return '@media screen and (min-width: ' + size + 'px)';
  },
  shadow     (shade)             {
    return {
      std: '0 4px 11px -2px ' + (shade || this.color(0.35).primary),
      md : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    }
  },
  size       (w, h)              {
    return {
      width  : w || 'auto',
      height : h || w || 'auto',
    };
  },
  text       (c, t, a, s)        {
    return {
      text_transform : (
        t === 'c' ? 'capitalize' :
        t === 'u' ? 'uppercase'  : 'none'
      ),
      text_align     : (
        a === 'c' ? 'center' :
        a === 'l' ? 'left'   :
        a === 'r' ? 'right'  : 'initial'
      ),
      color          : (c || this.color().text),
      letter_spacing : (s ? s + 'px' : 'normal'),
    };
  },
  width      (m, x)              {
    return {
      width     : '100%',
      min_width : typeof m === 'number' ? (m + 'px') : m,
      max_width : typeof x === 'number' ? (x + 'px') : (x || m),
    }
  },
};
const uids    = composer.store;

//core

const actions = {
  checkbox      (e)   {
    store.size = this.size || 16;
    store.type = this.name || 'regular';
    
    const list = Array.from(document.querySelectorAll('.checkbox'));
    
    void list.forEach(item => item.classList.remove('active'));
    void e.target.classList.toggle('active');
    void actions.updatehash();
    
    return;
  },
  format        (mac) {
    return store.type === 'special' ? this.formatspecial(mac) :
           store.type === 'mix'     ? this.formatmix(mac)     : mac;
  },
  formatmix     (mac) {
    let smac = this.formatspecial(mac);
    let nmac = '';
    let l    = smac.length;
    let i    = -1;
    
    while (++i < l) {
      let c = smac[i];
      
      nmac += (c === 'f' ? 'F' :
               c === 'e' ? 'E' :
               c === 'c' ? 'C' : c);
    }
    
    return nmac;
  },
  formatspecial (mac) {
    let nmac = '';
    let l    = mac.length;
    let i    = -1;
    
    while (++i < l) {
      let c = mac[i];
      
      nmac += (c === '1' ? '!' :
               c === 'a' ? '-' :
               c === '2' ? '&' : c);
    }
    
    return nmac;
  },
  updatehash    ()    {
    const city  = select('input.city')    .element.value;
    const crush = select('input.crush')   .element.value;
    const pwd   = select('input.password').element.value;
    const pin   = select('input.pin')     .element.value;
    const site  = select('input.website') .element.value;

    if (!pwd || !site || !city || !crush || !pin) return;
    
    const target  = select('input.hash');
    const mac     = new Hashes.SHA256().hex((city + crush + site).toLowerCase() + (pwd + pin));
    const hash    = actions.format(mac.slice(0, store.size));
    
    return target.value(hash);
  },
};
const nodes   = {
  get form() {
    const checkbox = function(name, size) {
      return  create.div
        .names('checkbox')
        .id(name)
        .add([
          create.div,
          create.span.text(name)
        ])
        .click(actions.checkbox.bind({size, name}))
    };
    
    return Node({
      '*': {
        ...style.font(14),
        box_sizing :'border-box',
      },
      '.checkbox div, input, textarea' : {
        ...style.border(1,1,1,1,1),
        background : 'white',
        width      : '100%',
      },
      '.checkbox'                      : {
        ...style.cursor,
        ...style.flex('c', '', 's'),
      },
      '.checkbox *'                    : {
        pointer_events: 'none',
      },
      '.checkbox:first-of-type'        : {
        margin_top: '1em',
      },
      '.checkbox:last-of-type'         : {
        margin_bottom: '1em',
      },
      '.checkbox div'                  : {
        ...style.size('1em'),
        margin_left: '1em',
      },
      '.checkbox.active div'           : {
        background: 'lightblue',
      },
      '.checkbox span'                 : {
        margin_left: '1em',
        text_transform:'capitalize',
      },
      'input, textarea'                : {
        padding    : '1em',
      },
      'textarea': {
        height: '100px'
      }
    })
      .add([
        ['Enter birth city',        'input.city'],
        ['Enter first & last name of first girlfriend', 'input.crush'],
        ['Enter seed password',     'input.password'],
        ['Enter seed pin',          'input.pin'],
        ['Enter target website',    'input.website']].map(data => [
            create.p.text(data[0]),
            create.input
            .on('change', actions.updatehash)
            .id(data[1])
      ]))
      .add([8, 16, 32, 64].map(size => create.div.add([
        create.p.text(size +  ' Characters'),
        checkbox('mix'    , size),
        checkbox('regular', size),
        checkbox('special', size),
      ])))
      .add(create.textarea.id('input.hash'))
  },
};

//init

void body.add(app);
void app .add(nodes.form);


