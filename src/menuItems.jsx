export const menuItems = [
  {
    title: "Dashboard",
    url: '/admin/dashboard'
  },
  {
    title: "Master Soal",
    url: '/admin/master-soal',
    submenu: [
      {
        title: "P3K Guru",
        url: '/admin/master-soal/p3k-guru',
        submenu: [
          {
            title: "Teknis",
            url: '/admin/master-soal/p3k-guru/teknis'
          },
          {
            title: "Managerial",
            url: '/admin/master-soal/p3k-guru/managerial'
          },
          {
            title: "Sosio-Kultural",
            url: '/admin/master-soal/p3k-guru/sosio-kultural'
          },
          {
            title: "Tes Bakat Skolastik",
            url: '/admin/master-soal/p3k-guru/bakat-skolastik'
          },
        ]
      },
      {
        title: "P3K Medis",
        url: '/admin/master-soal/p3k-medis',
        submenu: [
          {
            title: "Teknis",
            url: '/admin/master-soal/p3k-guru/teknis'
          },
          {
            title: "Managerial",
            url: '/admin/master-soal/p3k-guru/managerial'
          },
          {
            title: "Sosio-Kultural",
            url: '/admin/master-soal/p3k-guru/sosio-kultural'
          },
          {
            title: "Tes Bakat Skolastik",
            url: '/admin/master-soal/p3k-guru/bakat-skolastik'
          },
        ]
      },
    ]
  },
  {
    title: "Master Group",
    url: '/admin/master-group'
  },
  {
    title: "Master User",
    url: '/admin/master-user'
  },
  {
    title: "Validasi",
    url: '/admin/validasi'
  },
]
