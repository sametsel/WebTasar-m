var TodoModel = /** @class */ (function () {
    function TodoModel() {
        this.Id = Idnumber();
        this.work = "";
        this.isCompleted = false;
        this.createdAt = new Date();
    }
    return TodoModel;
}());
var todos = [];
// "Kaydet" butonuna tıklanıldığında "save" fonksiyonunu çağırır
$("#button").on("click", save);
function save() {
    var el = $("#work");
    var todo = new TodoModel();
    todo.work = el.val();
    todos.push(todo);
    // Input'u temizle ve odağı geri ver
    el.val("");
    el.focus();
    // Tabloyu güncelle
    setTr();
}
function setTr() {
    var tbody = $("#tbody"); // Bu id'ye sahip tbody elementini seçiyoruz
    var html = "";
    // Todos dizisini dolaşarak her bir görevi tabloya ekle
    todos.forEach(function (todo, index) {
        html += "\n        <tr>\n            <td>".concat(todo.Id, "</td>\n            <td>").concat(todo.work, "</td>\n            <td>").concat(todo.createdAt.toLocaleString(), "</td>  <!-- Tarih format\u0131 okunabilir hale getirildi -->\n            <td>").concat(todo.isCompleted ? 'Tamamlandı' : 'Devam ediyor', "</td>  <!-- G\u00F6revin durumu g\u00F6steriliyor -->\n            <td>\n                <button >Delete</button>  <!-- Silme butonu eklendi -->\n            </td>\n        </tr>");
    });
    // Tabloyu güncelleyerek yeniden oluştur
    tbody.html(html);
    // Silme butonlarına tıklama olayları ekleniyor
}
function Idnumber() {
    return todos.length + 1;
}
