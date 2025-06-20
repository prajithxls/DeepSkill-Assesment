﻿using System;
namespace FactoryMethodPatternExample {
    public interface IDocument {
        void Open();
    }
    public class WordDocument : IDocument {
        public void Open() {
            Console.WriteLine("Opened Word Document");
        }
    }
    public class PdfDocument : IDocument {
        public void Open() {
            Console.WriteLine("Opened PDF Document");
        }
    }
    public class ExcelDocument : IDocument {
        public void Open() {
            Console.WriteLine("Opened Excel Document");
        }
    }
    public abstract class DocumentFactory {
        public abstract IDocument CreateDocument();
    }
    public class WordDocumentFactory : DocumentFactory {
        public override IDocument CreateDocument() {
            return new WordDocument();
        }
    }
    public class PdfDocumentFactory : DocumentFactory {
        public override IDocument CreateDocument() {
            return new PdfDocument();
        }
    }
    public class ExcelDocumentFactory : DocumentFactory {
        public override IDocument CreateDocument() {
            return new ExcelDocument();
        }
    }
    class Program {
        static void Main(string[] args) {
            DocumentFactory wordFactory=new WordDocumentFactory();
            IDocument word=wordFactory.CreateDocument();
            word.Open();

            DocumentFactory pdfFactory=new PdfDocumentFactory();
            IDocument pdf=pdfFactory.CreateDocument();
            pdf.Open();

            DocumentFactory excelFactory=new ExcelDocumentFactory();
            IDocument excel=excelFactory.CreateDocument();
            excel.Open();
        }
    }
}
