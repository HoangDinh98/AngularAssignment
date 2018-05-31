// $(".delete-fnt").click(function () {
//     var types = ["Sản phẩm", "Danh mục", "Khuyến mãi", "Nhà cung cấp", "Đơn hàng", "Tài khoản", "Tập tin"];

//     var type = types[$(this).attr("data-type")];
//     var id = $(this).attr("data-id");
//     var item_name = $("#name_" + id).text();

//     $.Notifier("Cảnh báo",
//             "Bạn thự sự muốn xóa " + type + " này?" + "<br><b>\"" + item_name + "\"</b>",
//             "warning",
//             {
//                 vertical_align: "center",
//                 rtl: false,
//                 btns: [
//                     {
//                         label: "Xác nhận",
//                         type: "success",
//                         onClick: function () {
//                             event.preventDefault();
//                             document.getElementById('fnt_' + id).submit();
//                             return true;
//                         }
//                     },
//                     {
//                         label: "Hủy",
//                         type: "default",
//                         onClick: function () {
//                         }
//                     }
//                 ],
//                 callback: function () { }
//             });
// });


export function confirmDelete() {
    // $.Notifier("Cảnh báo",
    //     "Do you really want to delete this book?",
    //     "warning",
    //     {
    //         vertical_align: "center",
    //         rtl: false,
    //         btns: [
    //             {
    //                 label: "Accept",
    //                 type: "success",
    //                 onClick: function () {
    //                     return true;
    //                 }
    //             },
    //             {
    //                 label: "Cancel",
    //                 type: "default",
    //                 onClick: function () {
    //                     return false;
    //                 }
    //             }
    //         ],
    //         callback: function () {
    //             return false;
    //         }
    //     });
    console.log("OK 2");
}
