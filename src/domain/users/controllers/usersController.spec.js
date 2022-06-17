import { response } from "express";
import supertest from "supertest";
import app from "../../../";
import { usersController } from "./usersController";

const { describe } = require("../../../infrastructure/database/models/Posts");


describe('Referente ao User Controller, quando se executar a função', () => {

    describe('create', () => {

        test('sucesso quando usuário for criado', async () => {
            const response = await supertest(app)
            .post('/create')
            .send({
                "name": "usertest",
                "email": "usertes@email.com",
                "apartment": 42,
                "password": "senha123"
            })
            .expect(response.status).toBe(201)
        })
    })

    describe('findAll', () => {

        test('sucesso quando listar todos usuários', async () =>{
            const response = await supertest(app)
            .get('/')
            .send()

            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoidXNlcnRlc0BlbWFpbC5jb20iLCJuYW1lIjoidXNlcnRlc3QiLCJhcGFydG1lbnQiOjQyLCJpYXQiOjE2NTU0MzUzNTB9.gU24YLRa984QpN5ALJHrgPf73ePhPDz7VROZ0qRnwpY')
            
            expect(response.status).toBe(200)
        })
    })

    describe('update', () => {

        test('sucesso quando ocorre modificação do usuário', async () => {
            const response = await supertest(app)
            .put('/update/2')
            .send({
                "name": "supertest",
                "email": "supertest@email.com",
                "apartment": 123,
                "password": "senha123"
            })

            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoidXNlcnRlc0BlbWFpbC5jb20iLCJuYW1lIjoidXNlcnRlc3QiLCJhcGFydG1lbnQiOjQyLCJpYXQiOjE2NTU0MzUzNTB9.gU24YLRa984QpN5ALJHrgPf73ePhPDz7VROZ0qRnwpY')
            .expect(200);
            
        })
    })
    
    describe('destroy', () => {
        
        test('sucesso quando usuário é deletado', async () => {
            const response = await supertest(app)
            .delete('/delete/3')
            .send({})
            
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIsImVtYWlsIjoidXNlcnRlc0BlbWFpbC5jb20iLCJuYW1lIjoidXNlcnRlc3QiLCJhcGFydG1lbnQiOjQyLCJpYXQiOjE2NTU0MzUzNTB9.gU24YLRa984QpN5ALJHrgPf73ePhPDz7VROZ0qRnwpY')
            .expect(204);
        })
    })

    describe('login', () => {

        test('sucesso caso usuário logue corretamente', async () => {
            const response = await supertest(app)
            .post('/login')
            send({
                "email": 'vinny.admin@email.com',
                "password": "vinnyadmin"
            })

            .expect(200)
        })
    })
})