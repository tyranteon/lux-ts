// Generated from grammar/LuxLexer.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class LuxLexer extends Lexer {
	public static readonly NUMBER = 1;
	public static readonly ENDL = 2;
	public static readonly MLCOMMENT = 3;
	public static readonly SLCOMMENT = 4;
	public static readonly WS = 5;
	public static readonly OPNS = 6;
	public static readonly OPAT = 7;
	public static readonly COLON = 8;
	public static readonly LPAREN = 9;
	public static readonly RPAREN = 10;
	public static readonly LCURL = 11;
	public static readonly RCURL = 12;
	public static readonly LSQUARE = 13;
	public static readonly RSQUARE = 14;
	public static readonly COMMA = 15;
	public static readonly ARROW = 16;
	public static readonly OPASSIGN = 17;
	public static readonly OPEQ = 18;
	public static readonly OPUNEQ = 19;
	public static readonly SEMIC = 20;
	public static readonly OPPLUS = 21;
	public static readonly OPMOVE = 22;
	public static readonly OPINC = 23;
	public static readonly OPDEC = 24;
	public static readonly OPAPLUS = 25;
	public static readonly OPAMINUS = 26;
	public static readonly OPADIV = 27;
	public static readonly OPAMULT = 28;
	public static readonly OPAMOD = 29;
	public static readonly OPMINUS = 30;
	public static readonly OPMULT = 31;
	public static readonly OPDIV = 32;
	public static readonly OPMOD = 33;
	public static readonly OPNAV = 34;
	public static readonly OPCOAL = 35;
	public static readonly OPSAFENAV = 36;
	public static readonly OPQUEST = 37;
	public static readonly OPREF = 38;
	public static readonly OPRANGE = 39;
	public static readonly OPSKIP = 40;
	public static readonly OPELIPSE = 41;
	public static readonly AND = 42;
	public static readonly OR = 43;
	public static readonly NOT = 44;
	public static readonly GT = 45;
	public static readonly LT = 46;
	public static readonly GTE = 47;
	public static readonly LTE = 48;
	public static readonly CLASS = 49;
	public static readonly RETURN = 50;
	public static readonly IF = 51;
	public static readonly ELSE = 52;
	public static readonly BREAK = 53;
	public static readonly CONTINUE = 54;
	public static readonly GOTO = 55;
	public static readonly FOR = 56;
	public static readonly MATCH = 57;
	public static readonly ENUM = 58;
	public static readonly INHERIT = 59;
	public static readonly STRING = 60;
	public static readonly MACRO = 61;
	public static readonly ID = 62;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"NUMBER", "ALPHANUM", "ALPHA", "DIGIT", "ENDL", "MLCOMMENT", "SLCOMMENT", 
		"WS", "OPNS", "OPAT", "COLON", "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", 
		"RSQUARE", "COMMA", "ARROW", "OPASSIGN", "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", 
		"OPMOVE", "OPINC", "OPDEC", "OPAPLUS", "OPAMINUS", "OPADIV", "OPAMULT", 
		"OPAMOD", "OPMINUS", "OPMULT", "OPDIV", "OPMOD", "OPNAV", "OPCOAL", "OPSAFENAV", 
		"OPQUEST", "OPREF", "OPRANGE", "OPSKIP", "OPELIPSE", "AND", "OR", "NOT", 
		"GT", "LT", "GTE", "LTE", "CLASS", "RETURN", "IF", "ELSE", "BREAK", "CONTINUE", 
		"GOTO", "FOR", "MATCH", "ENUM", "INHERIT", "STRING", "ESC", "UNICODE", 
		"SINGLECHARHEX", "HEX", "MACRO", "ID",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, "'#'", 
		"'@'", "':'", "'('", "')'", "'{'", "'}'", "'['", "']'", "','", "'=>'", 
		"'='", "'=='", "'!='", "';'", "'+'", "'->'", "'++'", "'--'", "'+='", "'-='", 
		"'/='", "'*='", "'%='", "'-'", "'*'", "'/'", "'%'", "'.'", "'??'", "'?.'", 
		"'?'", "'&'", "'~'", "'_'", "'...'", "'and'", "'or'", "'!'", "'>'", "'<'", 
		"'>='", "'<='", "'class'", "'return'", "'if'", "'else'", "'break'", "'continue'", 
		"'goto'", "'for'", "'match'", "'enum'", "'inherit'", undefined, "'$'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "NUMBER", "ENDL", "MLCOMMENT", "SLCOMMENT", "WS", "OPNS", "OPAT", 
		"COLON", "LPAREN", "RPAREN", "LCURL", "RCURL", "LSQUARE", "RSQUARE", "COMMA", 
		"ARROW", "OPASSIGN", "OPEQ", "OPUNEQ", "SEMIC", "OPPLUS", "OPMOVE", "OPINC", 
		"OPDEC", "OPAPLUS", "OPAMINUS", "OPADIV", "OPAMULT", "OPAMOD", "OPMINUS", 
		"OPMULT", "OPDIV", "OPMOD", "OPNAV", "OPCOAL", "OPSAFENAV", "OPQUEST", 
		"OPREF", "OPRANGE", "OPSKIP", "OPELIPSE", "AND", "OR", "NOT", "GT", "LT", 
		"GTE", "LTE", "CLASS", "RETURN", "IF", "ELSE", "BREAK", "CONTINUE", "GOTO", 
		"FOR", "MATCH", "ENUM", "INHERIT", "STRING", "MACRO", "ID",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(LuxLexer._LITERAL_NAMES, LuxLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return LuxLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(LuxLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "LuxLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return LuxLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return LuxLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return LuxLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return LuxLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02@\u01BA\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t" +
		"\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t" +
		"\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t" +
		"\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
		"+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x03\x02\x05\x02\x8F\n\x02\x03\x02\x03\x02\x05\x02\x93\n\x02\x03\x02" +
		"\x07\x02\x96\n\x02\f\x02\x0E\x02\x99\v\x02\x03\x02\x05\x02\x9C\n\x02\x03" +
		"\x02\x03\x02\x05\x02\xA0\n\x02\x03\x02\x07\x02\xA3\n\x02\f\x02\x0E\x02" +
		"\xA6\v\x02\x03\x02\x03\x02\x03\x02\x05\x02\xAB\n\x02\x03\x02\x07\x02\xAE" +
		"\n\x02\f\x02\x0E\x02\xB1\v\x02\x05\x02\xB3\n\x02\x03\x03\x03\x03\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x07\x07\xC1\n\x07\f\x07\x0E\x07\xC4\v\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x07\b\xCF\n\b\f\b\x0E\b\xD2\v\b\x03" +
		"\b\x03\b\x03\t\x06\t\xD7\n\t\r\t\x0E\t\xD8\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10" +
		"\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B" +
		"\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03\"\x03" +
		"\"\x03#\x03#\x03$\x03$\x03%\x03%\x03&\x03&\x03\'\x03\'\x03\'\x03(\x03" +
		"(\x03(\x03)\x03)\x03*\x03*\x03+\x03+\x03,\x03,\x03-\x03-\x03-\x03-\x03" +
		".\x03.\x03.\x03.\x03/\x03/\x03/\x030\x030\x031\x031\x032\x032\x033\x03" +
		"3\x033\x034\x034\x034\x035\x035\x035\x035\x035\x035\x036\x036\x036\x03" +
		"6\x036\x036\x036\x037\x037\x037\x038\x038\x038\x038\x038\x039\x039\x03" +
		"9\x039\x039\x039\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03:\x03;\x03" +
		";\x03;\x03;\x03;\x03<\x03<\x03<\x03<\x03=\x03=\x03=\x03=\x03=\x03=\x03" +
		">\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03?\x03@\x03" +
		"@\x03@\x07@\u018A\n@\f@\x0E@\u018D\v@\x03@\x03@\x03@\x03@\x07@\u0193\n" +
		"@\f@\x0E@\u0196\v@\x03@\x05@\u0199\n@\x03A\x03A\x03A\x03A\x05A\u019F\n" +
		"A\x03B\x03B\x03B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03E\x03" +
		"E\x03F\x03F\x03F\x07F\u01B2\nF\fF\x0EF\u01B5\vF\x03F\x03F\x05F\u01B9\n" +
		"F\x03\xC2\x02\x02G\x03\x02\x03\x05\x02\x02\x07\x02\x02\t\x02\x02\v\x02" +
		"\x04\r\x02\x05\x0F\x02\x06\x11\x02\x07\x13\x02\b\x15\x02\t\x17\x02\n\x19" +
		"\x02\v\x1B\x02\f\x1D\x02\r\x1F\x02\x0E!\x02\x0F#\x02\x10%\x02\x11\'\x02" +
		"\x12)\x02\x13+\x02\x14-\x02\x15/\x02\x161\x02\x173\x02\x185\x02\x197\x02" +
		"\x1A9\x02\x1B;\x02\x1C=\x02\x1D?\x02\x1EA\x02\x1FC\x02 E\x02!G\x02\"I" +
		"\x02#K\x02$M\x02%O\x02&Q\x02\'S\x02(U\x02)W\x02*Y\x02+[\x02,]\x02-_\x02" +
		".a\x02/c\x020e\x021g\x022i\x023k\x024m\x025o\x026q\x027s\x028u\x029w\x02" +
		":y\x02;{\x02<}\x02=\x7F\x02>\x81\x02\x02\x83\x02\x02\x85\x02\x02\x87\x02" +
		"\x02\x89\x02?\x8B\x02@\x03\x02\f\x05\x022;C\\c|\x04\x02C\\c|\x03\x022" +
		";\x03\x02\f\f\x05\x02\v\v\x0F\x0F\"\"\x04\x02$$^^\x04\x02^^bb\v\x02$$" +
		"11^^bbddhhppttvv\x05\x022;CHch\x06\x02//2;C\\c|\x02\u01C7\x02\x03\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02" +
		"\x02)\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x02-\x03\x02\x02\x02\x02/\x03" +
		"\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03\x02\x02\x02\x025\x03\x02\x02" +
		"\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02" +
		"=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02A\x03\x02\x02\x02\x02C\x03\x02" +
		"\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02\x02\x02\x02I\x03\x02\x02\x02" +
		"\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02\x02Q\x03" +
		"\x02\x02\x02\x02S\x03\x02\x02\x02\x02U\x03\x02\x02\x02\x02W\x03\x02\x02" +
		"\x02\x02Y\x03\x02\x02\x02\x02[\x03\x02\x02\x02\x02]\x03\x02\x02\x02\x02" +
		"_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03\x02\x02\x02\x02e\x03\x02" +
		"\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02\x02\x02k\x03\x02\x02\x02" +
		"\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02q\x03\x02\x02\x02\x02s\x03" +
		"\x02\x02\x02\x02u\x03\x02\x02\x02\x02w\x03\x02\x02\x02\x02y\x03\x02\x02" +
		"\x02\x02{\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02" +
		"\x02\x89\x03\x02\x02\x02\x02\x8B\x03\x02\x02\x02\x03\xB2\x03\x02\x02\x02" +
		"\x05\xB4\x03\x02\x02\x02\x07\xB6\x03\x02\x02\x02\t\xB8\x03\x02\x02\x02" +
		"\v\xBA\x03\x02\x02\x02\r\xBC\x03\x02\x02\x02\x0F\xCA\x03\x02\x02\x02\x11" +
		"\xD6\x03\x02\x02\x02\x13\xDC\x03\x02\x02\x02\x15\xDE\x03\x02\x02\x02\x17" +
		"\xE0\x03\x02\x02\x02\x19\xE2\x03\x02\x02\x02\x1B\xE4\x03\x02\x02\x02\x1D" +
		"\xE6\x03\x02\x02\x02\x1F\xE8\x03\x02\x02\x02!\xEA\x03\x02\x02\x02#\xEC" +
		"\x03\x02\x02\x02%\xEE\x03\x02\x02\x02\'\xF0\x03\x02\x02\x02)\xF3\x03\x02" +
		"\x02\x02+\xF5\x03\x02\x02\x02-\xF8\x03\x02\x02\x02/\xFB\x03\x02\x02\x02" +
		"1\xFD\x03\x02\x02\x023\xFF\x03\x02\x02\x025\u0102\x03\x02\x02\x027\u0105" +
		"\x03\x02\x02\x029\u0108\x03\x02\x02\x02;\u010B\x03\x02\x02\x02=\u010E" +
		"\x03\x02\x02\x02?\u0111\x03\x02\x02\x02A\u0114\x03\x02\x02\x02C\u0117" +
		"\x03\x02\x02\x02E\u0119\x03\x02\x02\x02G\u011B\x03\x02\x02\x02I\u011D" +
		"\x03\x02\x02\x02K\u011F\x03\x02\x02\x02M\u0121\x03\x02\x02\x02O\u0124" +
		"\x03\x02\x02\x02Q\u0127\x03\x02\x02\x02S\u0129\x03\x02\x02\x02U\u012B" +
		"\x03\x02\x02\x02W\u012D\x03\x02\x02\x02Y\u012F\x03\x02\x02\x02[\u0133" +
		"\x03\x02\x02\x02]\u0137\x03\x02\x02\x02_\u013A\x03\x02\x02\x02a\u013C" +
		"\x03\x02\x02\x02c\u013E\x03\x02\x02\x02e\u0140\x03\x02\x02\x02g\u0143" +
		"\x03\x02\x02\x02i\u0146\x03\x02\x02\x02k\u014C\x03\x02\x02\x02m\u0153" +
		"\x03\x02\x02\x02o\u0156\x03\x02\x02\x02q\u015B\x03\x02\x02\x02s\u0161" +
		"\x03\x02\x02\x02u\u016A\x03\x02\x02\x02w\u016F\x03\x02\x02\x02y\u0173" +
		"\x03\x02\x02\x02{\u0179\x03\x02\x02\x02}\u017E\x03\x02\x02\x02\x7F\u0198" +
		"\x03\x02\x02\x02\x81\u019A\x03\x02\x02\x02\x83\u01A0\x03\x02\x02\x02\x85" +
		"\u01A6\x03\x02\x02\x02\x87\u01AA\x03\x02\x02\x02\x89\u01AC\x03\x02\x02" +
		"\x02\x8B\u01B8\x03\x02\x02\x02\x8D\x8F\x07/\x02\x02\x8E\x8D\x03\x02\x02" +
		"\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x97\x05\t\x05" +
		"\x02\x91\x93\x07\"\x02\x02\x92\x91\x03\x02\x02\x02\x92\x93\x03\x02\x02" +
		"\x02\x93\x94\x03\x02\x02\x02\x94\x96\x05\t\x05\x02\x95\x92\x03\x02\x02" +
		"\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02\x02" +
		"\x02\x98\xB3\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9C\x07/\x02" +
		"\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9D\x03\x02\x02" +
		"\x02\x9D\xA4\x05\t\x05\x02\x9E\xA0\x07\"\x02\x02\x9F\x9E\x03\x02\x02\x02" +
		"\x9F\xA0\x03\x02\x02\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA3\x05\t\x05\x02" +
		"\xA2\x9F\x03\x02\x02\x02\xA3\xA6\x03\x02\x02\x02\xA4\xA2\x03\x02\x02\x02" +
		"\xA4\xA5\x03\x02\x02\x02\xA5\xA7\x03\x02\x02\x02\xA6\xA4\x03\x02\x02\x02" +
		"\xA7\xA8\x070\x02\x02\xA8\xAF\x05\t\x05\x02\xA9\xAB\x07\"\x02\x02\xAA" +
		"\xA9\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC" +
		"\xAE\x05\t\x05\x02\xAD\xAA\x03\x02\x02\x02\xAE\xB1\x03\x02\x02\x02\xAF" +
		"\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\xB3\x03\x02\x02\x02\xB1" +
		"\xAF\x03\x02\x02\x02\xB2\x8E\x03\x02\x02\x02\xB2\x9B\x03\x02\x02\x02\xB3" +
		"\x04\x03\x02\x02\x02\xB4\xB5\t\x02\x02\x02\xB5\x06\x03\x02\x02\x02\xB6" +
		"\xB7\t\x03\x02\x02\xB7\b\x03\x02\x02\x02\xB8\xB9\t\x04\x02\x02\xB9\n\x03" +
		"\x02\x02\x02\xBA\xBB\t\x05\x02\x02\xBB\f\x03\x02\x02\x02\xBC\xBD\x071" +
		"\x02\x02\xBD\xBE\x07,\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1\v\x02\x02" +
		"\x02\xC0\xBF\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC3\x03\x02\x02" +
		"\x02\xC2\xC0\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02" +
		"\x02\xC5\xC6\x07,\x02\x02\xC6\xC7\x071\x02\x02\xC7\xC8\x03\x02\x02\x02" +
		"\xC8\xC9\b\x07\x02\x02\xC9\x0E\x03\x02\x02\x02\xCA\xCB\x071\x02\x02\xCB" +
		"\xCC\x071\x02\x02\xCC\xD0\x03\x02\x02\x02\xCD\xCF\n\x05\x02\x02\xCE\xCD" +
		"\x03\x02\x02\x02\xCF\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1" +
		"\x03\x02\x02\x02\xD1\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4" +
		"\b\b\x02\x02\xD4\x10\x03\x02\x02\x02\xD5\xD7\t\x06\x02\x02\xD6\xD5\x03" +
		"\x02\x02\x02\xD7\xD8\x03\x02\x02\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03" +
		"\x02\x02\x02\xD9\xDA\x03\x02\x02\x02\xDA\xDB\b\t\x02\x02\xDB\x12\x03\x02" +
		"\x02\x02\xDC\xDD\x07%\x02\x02\xDD\x14\x03\x02\x02\x02\xDE\xDF\x07B\x02" +
		"\x02\xDF\x16\x03\x02\x02\x02\xE0\xE1\x07<\x02\x02\xE1\x18\x03\x02\x02" +
		"\x02\xE2\xE3\x07*\x02\x02\xE3\x1A\x03\x02\x02\x02\xE4\xE5\x07+\x02\x02" +
		"\xE5\x1C\x03\x02\x02\x02\xE6\xE7\x07}\x02\x02\xE7\x1E\x03\x02\x02\x02" +
		"\xE8\xE9\x07\x7F\x02\x02\xE9 \x03\x02\x02\x02\xEA\xEB\x07]\x02\x02\xEB" +
		"\"\x03\x02\x02\x02\xEC\xED\x07_\x02\x02\xED$\x03\x02\x02\x02\xEE\xEF\x07" +
		".\x02\x02\xEF&\x03\x02\x02\x02\xF0\xF1\x07?\x02\x02\xF1\xF2\x07@\x02\x02" +
		"\xF2(\x03\x02\x02\x02\xF3\xF4\x07?\x02\x02\xF4*\x03\x02\x02\x02\xF5\xF6" +
		"\x07?\x02\x02\xF6\xF7\x07?\x02\x02\xF7,\x03\x02\x02\x02\xF8\xF9\x07#\x02" +
		"\x02\xF9\xFA\x07?\x02\x02\xFA.\x03\x02\x02\x02\xFB\xFC\x07=\x02\x02\xFC" +
		"0\x03\x02\x02\x02\xFD\xFE\x07-\x02\x02\xFE2\x03\x02\x02\x02\xFF\u0100" +
		"\x07/\x02\x02\u0100\u0101\x07@\x02\x02\u01014\x03\x02\x02\x02\u0102\u0103" +
		"\x07-\x02\x02\u0103\u0104\x07-\x02\x02\u01046\x03\x02\x02\x02\u0105\u0106" +
		"\x07/\x02\x02\u0106\u0107\x07/\x02\x02\u01078\x03\x02\x02\x02\u0108\u0109" +
		"\x07-\x02\x02\u0109\u010A\x07?\x02\x02\u010A:\x03\x02\x02\x02\u010B\u010C" +
		"\x07/\x02\x02\u010C\u010D\x07?\x02\x02\u010D<\x03\x02\x02\x02\u010E\u010F" +
		"\x071\x02\x02\u010F\u0110\x07?\x02\x02\u0110>\x03\x02\x02\x02\u0111\u0112" +
		"\x07,\x02\x02\u0112\u0113\x07?\x02\x02\u0113@\x03\x02\x02\x02\u0114\u0115" +
		"\x07\'\x02\x02\u0115\u0116\x07?\x02\x02\u0116B\x03\x02\x02\x02\u0117\u0118" +
		"\x07/\x02\x02\u0118D\x03\x02\x02\x02\u0119\u011A\x07,\x02\x02\u011AF\x03" +
		"\x02\x02\x02\u011B\u011C\x071\x02\x02\u011CH\x03\x02\x02\x02\u011D\u011E" +
		"\x07\'\x02\x02\u011EJ\x03\x02\x02\x02\u011F\u0120\x070\x02\x02\u0120L" +
		"\x03\x02\x02\x02\u0121\u0122\x07A\x02\x02\u0122\u0123\x07A\x02\x02\u0123" +
		"N\x03\x02\x02\x02\u0124\u0125\x07A\x02\x02\u0125\u0126\x070\x02\x02\u0126" +
		"P\x03\x02\x02\x02\u0127\u0128\x07A\x02\x02\u0128R\x03\x02\x02\x02\u0129" +
		"\u012A\x07(\x02\x02\u012AT\x03\x02\x02\x02\u012B\u012C\x07\x80\x02\x02" +
		"\u012CV\x03\x02\x02\x02\u012D\u012E\x07a\x02\x02\u012EX\x03\x02\x02\x02" +
		"\u012F\u0130\x070\x02\x02\u0130\u0131\x070\x02\x02\u0131\u0132\x070\x02" +
		"\x02\u0132Z\x03\x02\x02\x02\u0133\u0134\x07c\x02\x02\u0134\u0135\x07p" +
		"\x02\x02\u0135\u0136\x07f\x02\x02\u0136\\\x03\x02\x02\x02\u0137\u0138" +
		"\x07q\x02\x02\u0138\u0139\x07t\x02\x02\u0139^\x03\x02\x02\x02\u013A\u013B" +
		"\x07#\x02\x02\u013B`\x03\x02\x02\x02\u013C\u013D\x07@\x02\x02\u013Db\x03" +
		"\x02\x02\x02\u013E\u013F\x07>\x02\x02\u013Fd\x03\x02\x02\x02\u0140\u0141" +
		"\x07@\x02\x02\u0141\u0142\x07?\x02\x02\u0142f\x03\x02\x02\x02\u0143\u0144" +
		"\x07>\x02\x02\u0144\u0145\x07?\x02\x02\u0145h\x03\x02\x02\x02\u0146\u0147" +
		"\x07e\x02\x02\u0147\u0148\x07n\x02\x02\u0148\u0149\x07c\x02\x02\u0149" +
		"\u014A\x07u\x02\x02\u014A\u014B\x07u\x02\x02\u014Bj\x03\x02\x02\x02\u014C" +
		"\u014D\x07t\x02\x02\u014D\u014E\x07g\x02\x02\u014E\u014F\x07v\x02\x02" +
		"\u014F\u0150\x07w\x02\x02\u0150\u0151\x07t\x02\x02\u0151\u0152\x07p\x02" +
		"\x02\u0152l\x03\x02\x02\x02\u0153\u0154\x07k\x02\x02\u0154\u0155\x07h" +
		"\x02\x02\u0155n\x03\x02\x02\x02\u0156\u0157\x07g\x02\x02\u0157\u0158\x07" +
		"n\x02\x02\u0158\u0159\x07u\x02\x02\u0159\u015A\x07g\x02\x02\u015Ap\x03" +
		"\x02\x02\x02\u015B\u015C\x07d\x02\x02\u015C\u015D\x07t\x02\x02\u015D\u015E" +
		"\x07g\x02\x02\u015E\u015F\x07c\x02\x02\u015F\u0160\x07m\x02\x02\u0160" +
		"r\x03\x02\x02\x02\u0161\u0162\x07e\x02\x02\u0162\u0163\x07q\x02\x02\u0163" +
		"\u0164\x07p\x02\x02\u0164\u0165\x07v\x02\x02\u0165\u0166\x07k\x02\x02" +
		"\u0166\u0167\x07p\x02\x02\u0167\u0168\x07w\x02\x02\u0168\u0169\x07g\x02" +
		"\x02\u0169t\x03\x02\x02\x02\u016A\u016B\x07i\x02\x02\u016B\u016C\x07q" +
		"\x02\x02\u016C\u016D\x07v\x02\x02\u016D\u016E\x07q\x02\x02\u016Ev\x03" +
		"\x02\x02\x02\u016F\u0170\x07h\x02\x02\u0170\u0171\x07q\x02\x02\u0171\u0172" +
		"\x07t\x02\x02\u0172x\x03\x02\x02\x02\u0173\u0174\x07o\x02\x02\u0174\u0175" +
		"\x07c\x02\x02\u0175\u0176\x07v\x02\x02\u0176\u0177\x07e\x02\x02\u0177" +
		"\u0178\x07j\x02\x02\u0178z\x03\x02\x02\x02\u0179\u017A\x07g\x02\x02\u017A" +
		"\u017B\x07p\x02\x02\u017B\u017C\x07w\x02\x02\u017C\u017D\x07o\x02\x02" +
		"\u017D|\x03\x02\x02\x02\u017E\u017F\x07k\x02\x02\u017F\u0180\x07p\x02" +
		"\x02\u0180\u0181\x07j\x02\x02\u0181\u0182\x07g\x02\x02\u0182\u0183\x07" +
		"t\x02\x02\u0183\u0184\x07k\x02\x02\u0184\u0185\x07v\x02\x02\u0185~\x03" +
		"\x02\x02\x02\u0186\u018B\x07$\x02\x02\u0187\u018A\x05\x81A\x02\u0188\u018A" +
		"\n\x07\x02\x02\u0189\u0187\x03\x02\x02\x02\u0189\u0188\x03\x02\x02\x02" +
		"\u018A\u018D\x03\x02\x02\x02\u018B\u0189\x03\x02\x02\x02\u018B\u018C\x03" +
		"\x02\x02\x02\u018C\u018E\x03\x02\x02\x02\u018D\u018B\x03\x02\x02\x02\u018E" +
		"\u0199\x07$\x02\x02\u018F\u0194\x07b\x02\x02\u0190\u0193\x05\x81A\x02" +
		"\u0191\u0193\n\b\x02\x02\u0192\u0190\x03\x02\x02\x02\u0192\u0191\x03\x02" +
		"\x02\x02\u0193\u0196\x03\x02\x02\x02\u0194\u0192\x03\x02\x02\x02\u0194" +
		"\u0195\x03\x02\x02\x02\u0195\u0197\x03\x02\x02\x02\u0196\u0194\x03\x02" +
		"\x02\x02\u0197\u0199\x07b\x02\x02\u0198\u0186\x03\x02\x02\x02\u0198\u018F" +
		"\x03\x02\x02\x02\u0199\x80\x03\x02\x02\x02\u019A\u019E\x07^\x02\x02\u019B" +
		"\u019F\t\t\x02\x02\u019C\u019F\x05\x83B\x02\u019D\u019F\x05\x85C\x02\u019E" +
		"\u019B\x03\x02\x02\x02\u019E\u019C\x03\x02\x02\x02\u019E\u019D\x03\x02" +
		"\x02\x02\u019F\x82\x03\x02\x02\x02\u01A0\u01A1\x07w\x02\x02\u01A1\u01A2" +
		"\x05\x87D\x02\u01A2\u01A3\x05\x87D\x02\u01A3\u01A4\x05\x87D\x02\u01A4" +
		"\u01A5\x05\x87D\x02\u01A5\x84\x03\x02\x02\x02\u01A6\u01A7\x07z\x02\x02" +
		"\u01A7\u01A8\x05\x87D\x02\u01A8\u01A9\x05\x87D\x02\u01A9\x86\x03\x02\x02" +
		"\x02\u01AA\u01AB\t\n\x02\x02\u01AB\x88\x03\x02\x02\x02\u01AC\u01AD\x07" +
		"&\x02\x02\u01AD\x8A\x03\x02\x02\x02\u01AE\u01B9\x05\x07\x04\x02\u01AF" +
		"\u01B3\x05\x05\x03\x02\u01B0\u01B2\t\v\x02\x02\u01B1\u01B0\x03\x02\x02" +
		"\x02\u01B2\u01B5\x03\x02\x02\x02\u01B3\u01B1\x03\x02\x02\x02\u01B3\u01B4" +
		"\x03\x02\x02\x02\u01B4\u01B6\x03\x02\x02\x02\u01B5\u01B3\x03\x02\x02\x02" +
		"\u01B6\u01B7\x05\x05\x03\x02\u01B7\u01B9\x03\x02\x02\x02\u01B8\u01AE\x03" +
		"\x02\x02\x02\u01B8\u01AF\x03\x02\x02\x02\u01B9\x8C\x03\x02\x02\x02\x17" +
		"\x02\x8E\x92\x97\x9B\x9F\xA4\xAA\xAF\xB2\xC2\xD0\xD8\u0189\u018B\u0192" +
		"\u0194\u0198\u019E\u01B3\u01B8\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LuxLexer.__ATN) {
			LuxLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(LuxLexer._serializedATN));
		}

		return LuxLexer.__ATN;
	}

}

