import { types } from "../types/types";

export const loadPost = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        allPost([
          {
            id: 1,
            imag: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
            title: "Arbol",
            likes: 0,
          },
          {
            id: 2,
            imag: "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800",
            title: "Colores",
            likes: 0,
          },
          {
            id: 3,
            imag: "https://static1.diariosur.es/www/multimedia/201909/30/media/cortadas/imagensensible-kYzD-U90285421336FWD-624x385@Diario%20Sur.jpg",
            title: "Ojo",
            likes: 0,
          },
          {
            id: 4,
            imag: "https://www.educaciontrespuntocero.com/wp-content/uploads/2019/02/girasoles-978x652.jpg",
            title: "Girasol",
            likes: 0,
          },
          {
            id: 5,
            imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6BfhUOveAdD16HGKaenVuv7XBCus4vVY_Og&usqp=CAU",
            title: "Mariposa",
            likes: 0,
          },
          {
            id: 6,
            imag: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5fa415e65cafe86fdacd2a40/1-paisaje-con-nieve_1.jpg",
            title: "Nieve",
            likes: 0,
          },
          {
            id: 7,
            imag: "https://ep01.epimg.net/elpais/imagenes/2021/04/02/album/1617358467_015666_1617366075_noticia_normal.jpg",
            title: "Calle",
            likes: 0,
          },
          {
            id: 8,
            imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzkUJyezGNUs3rlq3EkWCBy9ZSymjSw1JBQ&usqp=CAU",
            title: "Hongo",
            likes: 0,
          },
          {
            id: 9,
            imag: "https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg",
            title: "Whats",
            likes: 0,
          },
          {
            id: 10,
            imag: "https://media.istockphoto.com/photos/sagittarius-zodiac-sign-archer-centaur-shoots-a-bow-horoscope-icon-picture-id1146894594?k=6&m=1146894594&s=612x612&w=0&h=NNp0R9cg918N45eEwp0Sj5nQChE75ZCBVbsovYXKZQg=",
            title: "Sagitario",
            likes: 0,
          },
        ])
      );
    }, 1500);
  };
};

export const allPost = (post) => ({
  type: types.getPost,
  payload: post,
});

export const counterLike = (id) => ({
  type: types.addLike,
  payload: id,
});
