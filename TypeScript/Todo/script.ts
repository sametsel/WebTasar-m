declare const $: any;

class TodoModel {
    Id: number = Idnumber();
    work: string = "";
    isCompleted: boolean = false;
    createdAt: Date = new Date();
}

const todos: TodoModel[] = [];

// "Kaydet" butonuna tıklanıldığında "save" fonksiyonunu çağırır
$("#button").on("click", save);

function save() {
    const el = $("#work");

    const todo = new TodoModel();
    todo.work = el.val();

    todos.push(todo);

    // Input'u temizle ve odağı geri ver
    el.val("");
    el.focus();

    // Tabloyu güncelle
    setTr();
}

function setTr() {
    const tbody = $("#tbody");  // Bu id'ye sahip tbody elementini seçiyoruz
    let html = "";

    // Todos dizisini dolaşarak her bir görevi tabloya ekle
    todos.forEach((todo, index) => {
        html += `
        <tr>
            <td>${todo.Id}</td>
            <td>${todo.work}</td>
            <td>${todo.createdAt.toLocaleString()}</td>  <!-- Tarih formatı okunabilir hale getirildi -->
            <td>${todo.isCompleted ? 'Tamamlandı' : 'Devam ediyor'}</td>  <!-- Görevin durumu gösteriliyor -->
            <td>
                <button >Delete</button>  <!-- Silme butonu eklendi -->
            </td>
        </tr>`;
    });

    // Tabloyu güncelleyerek yeniden oluştur
    tbody.html(html);

    // Silme butonlarına tıklama olayları ekleniyor
   
}
function Idnumber(){
 return todos.length+1;
}
