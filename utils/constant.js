const initialImage = ["1.img", "2.img", "3.img", "4.img"];
const initialcomments = [
  {
    name: initialImage[0],
    comment: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies elit dictum lorem vehicula cursus. Etiam semper massa id lacus volutpat scelerisque. Donec quis volutpat nisl, eget interdum tellus. Suspendisse.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce pharetra dignissim velit et pharetra. Sed tempor molestie urna, sed vestibulum enim interdum ultricies. Curabitur pellentesque leo at ligula pretium egestas.",
    ],
  },
  {
    name: initialImage[1],
    comment: [
      "Nam sit amet mauris vel turpis scelerisque mollis. Phasellus ac lectus vel augue condimentum varius nec eget neque. Proin arcu odio, posuere id mauris id, hendrerit dictum dolor. Suspendisse sit.",
      "Mauris eu mauris mollis justo maximus commodo. Donec nec dui ultrices, dignissim velit ac, varius nibh. Mauris lacinia elit sollicitudin, aliquet ante at, maximus ante. Vestibulum ante ipsum primis in.",
      "Aenean ultricies est sit amet aliquet mollis. Nulla ullamcorper nisi non dolor posuere tincidunt. Donec sem justo, sagittis ac urna sit amet, accumsan vulputate urna. Praesent eget eros sagittis, sagittis.",
    ],
  },
  {
    name: initialImage[2],
    comment: [
      "Donec et tincidunt eros, quis interdum odio. Quisque eget nibh non libero rhoncus faucibus. Vivamus viverra aliquam nisl, cursus ultricies nunc fermentum nec. Maecenas semper sapien ac iaculis viverra. Vestibulum.",
      "Sed egestas maximus sem accumsan varius. Nullam elementum ipsum lobortis leo ullamcorper hendrerit. Aliquam consequat nisl tortor, at cursus est maximus id. Duis vulputate felis non velit iaculis, convallis facilisis. ",
    ],
  },
  {
    name: initialImage[3],
    comment: [
      "Donec vitae massa condimentum, commodo tortor nec, pharetra arcu. Donec sed augue id turpis tempus euismod at sagittis est. Aenean risus felis, pellentesque quis efficitur nec, aliquet vel lectus. Maecenas.",
      "Mauris eu mauris mollis justo maximus commodo. Donec nec dui ultrices, dignissim velit ac, varius nibh. Mauris lacinia elit sollicitudin, aliquet ante at, maximus ante. Vestibulum ante ipsum primis in.",
      "Nulla facilisi. Phasellus mattis elit et lacinia venenatis. Mauris tristique volutpat nisl. Donec facilisis libero vitae feugiat convallis. Sed pretium non massa nec mollis. Sed vehicula, magna eu imperdiet pulvinar.",
      "Curabitur at odio enim. Morbi molestie viverra tristique. Nulla velit turpis, viverra eget dignissim eget, convallis non ligula. Pellentesque pulvinar augue ut orci sagittis dictum. Vestibulum ante ipsum primis in. ",
    ],
  },
];

const avatar = [
  { title: "Eric Hoffman", img: "/avatar/avatar-1.png" },
  { title: "Jonathan Nolan", img: "/avatar/avatar-2.png" },
  { title: "Jenny Alex", img: "/avatar/avatar-3.png" },
  { title: "Steve Wolf", img: "/avatar/avatar-4.png" },
];
const role = [
  { role: "Author", img: "/role/role-1.jpg" },
  { role: "Reviewer", img: "/role/role-2.jpg" },
  { role: "Watcher", img: "/role/role-3.jpg" },
  { role: "Contributor", img: "/role/role-4.jpg" },
];

const imageDes =
  "Donec vitae massa condimentum, commodo tortor nec, pharetra arcu. Donec sed augue id turpis tempus euismod at sagittis est. Aenean risus felis, pellentesque quis efficitur nec, aliquet vel lectus. Maecenas,Mauris eu mauris mollis justo maximus commodo. Donec nec dui ultrices, dignissim velit ac";

export { initialcomments, initialImage, avatar, role, imageDes };
