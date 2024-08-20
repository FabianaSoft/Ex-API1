"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connection_1 = __importDefault(require("./services/connection"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const porta = 3030;
app.get('/', (req, res) => {
    res.send('API em NodeJS com TS');
});
app.get('/departamentos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const [data] = yield connection_1.default.query("SELECT * FROM departamentos");
    res.json(data);
}));
app.post('/departamentos', (req, res) => {
    console.log(req.body);
    res.send('POST departamentos');
});
app.delete('/departamentos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const query = yield connection_1.default.query(`DELETE FROM departamentos WHERE id_departamento = ${id}`);
    res.json(query);
}));
app.listen(porta, () => {
    console.log(`Servidor escutando na
porta http://localhost:${porta}`);
});
